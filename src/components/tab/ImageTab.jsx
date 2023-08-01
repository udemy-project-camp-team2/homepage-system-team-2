import { Fragment } from "react";
import styled from "styled-components";
import { imageLists } from "../../libs/image-lists";
import Image from "../image/Image";

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => props.$gridTemplateColumns};
  gap: .4rem;
`;

const ImageTab = () => {
  return (
    <Fragment>
      {imageLists.map(list => {
        return <ImageWrapper key={list.id} $gridTemplateColumns={`repeat(${list.length}, 1fr)`}>
          {Array.from({length: list.length}).map((_, i) => <Image key={i} list={list} modal={true} />)}
        </ImageWrapper>
      })}
    </Fragment>
  );
};

export default ImageTab;