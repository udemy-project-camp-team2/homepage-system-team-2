import { Fragment } from "react";
import styled from "styled-components";
import { lineLists } from "../../libs/line-lists";
import Line from "../line/Line";

const LineContainer = styled.div`
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #000;
	border-radius: 0.5rem;
`;

const LineTab = () => {
	return (
		<Fragment>
			{lineLists.map(list => <LineContainer key={list.id}><Line style={list.style} /></LineContainer>)}
		</Fragment>
	);
};

export default LineTab;