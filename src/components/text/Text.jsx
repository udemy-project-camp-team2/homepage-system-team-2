import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledText = styled.span`
  font-size: ${props=> props.$fontSize};
`;

const Text = ({style, children}) => {
  return (
    <StyledText $fontSize={style}>{children}</StyledText>
  );
};

export default Text;

Text.propTypes = {
  style: PropTypes.string,
  children: PropTypes.node
}