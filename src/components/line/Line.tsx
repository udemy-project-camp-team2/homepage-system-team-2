import styled from 'styled-components';

interface LineProps {
	borderType: string;
}

const StyledHr = styled.hr<{ $borderLine: string }>`
	width: 100%;
	border: 5px ${(props) => props.$borderLine} #000;
`;

const Line = ({ borderType }: LineProps) => {
	switch (borderType) {
		case 'solid-line':
			return <StyledHr $borderLine={'solid'} />;
		case 'dashed-line':
			return <StyledHr $borderLine={'dashed'} />;
		case 'dotted-line':
			return <StyledHr $borderLine={'dotted'} />;
		default:
			return <StyledHr $borderLine={'solid'} />;
	}
};

export default Line;
