import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { listLists } from '../../libs/list-lists';

const ListContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid rgba(0, 0, 0, 0.5);
	border-radius: 0.5rem;
	cursor: pointer;
	img {
		width: 100%;
		height: 100%;
	}
`;

const ListTab = ({ setDesignType }) => {
	const selectedId = useSelector((state) => state.selectedId.selectedId);
	return (
		<Fragment>
			{listLists.map((list) => (
				<ListContainer
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
				</ListContainer>
			))}
		</Fragment>
	);
};

export default ListTab;

ListTab.propTypes = {
	setDesignType: PropTypes.func,
};
