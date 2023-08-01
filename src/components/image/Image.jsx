import PropTypes from "prop-types"
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  place-self: center;
  background-color: #ececec;
  border-radius: ${props => props.$borderRadius};
`;

const StyledImg = styled.img`
display: block;
`;

const Image = ({list}) => {
  return (
    <ImageContainer $borderRadius={list.circle ? "50%" : ""} >
      <StyledImg src={`/images/image_logo.png`} alt={`image`} />
    </ImageContainer>
  );
};

export default Image;

Image.propTypes = {
  list: PropTypes.object
}