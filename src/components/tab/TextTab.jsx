import { Fragment } from "react";
import styled from "styled-components";
import { textLists } from "../../libs/text-lists";
import Text from "../text/Text";

const TextContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 1rem;
  text-align: center;
`;

const TextTab = () => {
  return (
    <Fragment>
      {textLists.map(list => <TextContainer key={list.id}><Text style={list.style}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis sequi dignissimos voluptatem aliquid aliquam eius adipisci, quidem, dolor ducimus dolores autem illo qui deleniti sunt blanditiis sed ut nulla. Porro!</Text></TextContainer>)}
    </Fragment>
  );
};

export default TextTab;