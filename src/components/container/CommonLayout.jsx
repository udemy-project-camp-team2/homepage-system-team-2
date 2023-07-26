import PropTypes from 'prop-types';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const StyledLayout = styled.div`
	width: 60%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	float: right;
`;

const CommonLayout = ({ length }) => {
	return (
		<StyledLayout>
			{Array.from({ length }, () => ({ id: uuidv4(), type: '' })).map(
				(layout) => (
					<div style={{ border: '1px dashed #000' }} key={layout.id}>
						레이아웃입니다.
					</div>
				)
			)}
		</StyledLayout>
	);
};

export default CommonLayout;

CommonLayout.propTypes = {
	length: PropTypes.number,
};
