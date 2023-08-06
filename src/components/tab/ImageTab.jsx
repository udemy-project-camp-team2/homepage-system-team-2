import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { imageLists } from '../../libs/image-lists';

const ImageWrapper = styled.div`
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

const ImageTab = ({ setDesignType }) => {
	const selectedId = useSelector((state) => state.selectedId.selectedId);

	return (
		<Fragment>
			{imageLists.map((list) => {
				return (
					<ImageWrapper
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
					</ImageWrapper>
				);
			})}
		</Fragment>
	);
};

export default ImageTab;

ImageTab.propTypes = {
	setDesignType: PropTypes.func,
};
