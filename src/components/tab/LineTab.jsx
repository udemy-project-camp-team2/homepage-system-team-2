import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { lineLists } from '../../libs/line-lists';

const LineContainer = styled.div`
	margin: 0 auto;
	margin-bottom: 1rem;
	width: 50%;
	height: 150px;
	border: 1px solid rgba(0, 0, 0, 0.5);
	border-radius: 0.5rem;
	cursor: pointer;

	img {
		width: 100%;
		height: 100%;
	}
`;

const LineTab = ({ setDesignType }) => {
	const selectedId = useSelector((state) => state.selectedId.selectedId);

	return (
		<Fragment>
			{lineLists.map((list) => (
				<LineContainer
					key={list.id}
					onClick={() =>
						setDesignType({
							id: selectedId,
							type: list.type,
							length: list.length,
						})
					}
				>
					<img src={list.src} alt={list.type} />
				</LineContainer>
			))}
		</Fragment>
	);
};

export default LineTab;

LineTab.propTypes = {
	setDesignType: PropTypes.func,
};
