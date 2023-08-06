import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHr = styled.hr`
	width: 100%;
	border: 5px ${(props) => props.$borderLine} #000;
`;

const Line = ({ borderType }) => {
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

Line.propTypes = {
	borderType: PropTypes.string,
};
