import PropTypes from "prop-types"
import styled from "styled-components";

const StyledHr = styled.hr`
  width: 100%;
  border: 5px ${props => props.$borderStyle} #ececec;
`;

const Line = ({style}) => {
  return (
    <StyledHr $borderStyle={style} />
  );
};

export default Line;

Line.propTypes = {
  style: PropTypes.string
}