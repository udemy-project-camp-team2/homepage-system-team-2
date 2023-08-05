import { Fragment } from 'react';
import styled from 'styled-components';
import { imageLists } from '../../libs/image-lists';

const ImageWrapper = styled.div`
	margin-bottom: 1rem;
	height: 150px;
	border: 1px solid rgba(0, 0, 0, 0.5);
	border-radius: 0.5rem;
	cursor: pointer;

	img {
		width: 100%;
		height: 100%;
	}
`;

const ImageTab = () => {
	return (
		<Fragment>
			{imageLists.map((list) => {
				return (
					<ImageWrapper key={list.id}>
						<img src={list.src} alt={list.type} />
					</ImageWrapper>
				);
			})}
		</Fragment>
	);
};

export default ImageTab;
