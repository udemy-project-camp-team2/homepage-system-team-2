import PropTypes from "prop-types"
import { useState } from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  place-self: center;
  background-color: #ececec;
  border-radius: ${props => props.$borderRadius};
`;

const StyledImg = styled.img`
width: 100%;
  height: ${props => props.$height};
  display: block;
  object-fit: fill;
`;

const Image = ({list, modal}) => {
  const [image, setImage] = useState("");

  const changeImageHandler = (e) => {
    const targetImg = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(targetImg);
    reader.onload = () => setImage(reader.result);
  }

  return (
    <ImageContainer $borderRadius={list.circle ? "50%" : ""} >
      {modal ? null : <label style={{position:"absolute", cursor: "pointer"}} htmlFor="image_selector">이미지 선택<input id="image_selector" accept="image/*" style={{ display: "none"}} type="file" onChange={changeImageHandler} /></label>}
      <StyledImg src={image || `/images/image_logo.png`} alt={`image`} $width={modal ? "" : "100%"} $height={modal ? "" : "inherit"} />
    </ImageContainer>
  );
};

export default Image;

Image.propTypes = {
  list: PropTypes.object,
  modal: PropTypes.bool
}