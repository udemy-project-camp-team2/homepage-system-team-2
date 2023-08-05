import { Fragment } from 'react';
import styled from 'styled-components';
import { lineLists } from '../../libs/line-lists';

const LineContainer = styled.div`
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

const LineTab = () => {
	return (
		<Fragment>
			{lineLists.map((list) => (
				<LineContainer key={list.id}>
					<img src={list.src} alt={list.type} />
				</LineContainer>
			))}
		</Fragment>
	);
};

export default LineTab;
