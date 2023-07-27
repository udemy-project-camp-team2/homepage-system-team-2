import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
	border: 1px solid #ccc;
	padding: 20px;
`;

const Rectangle = styled.div`
  border: 1px dashed #000;
  width: 100px;
  height: 50px;
  margin: 5px;
`;

const CommonLayout = ({ numRectangles }) => {
  return (
    <StyledLayout>
      {[...Array(numRectangles)].map((_, index) => (
        <Rectangle key={index}>직사각형 {index + 1}</Rectangle>
      ))}
    </StyledLayout>
  );
};

export default CommonLayout;

CommonLayout.propTypes = {
  numRectangles: PropTypes.number.isRequired,
};
