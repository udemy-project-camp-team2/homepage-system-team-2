import { hover } from '@testing-library/user-event/dist/hover';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button(({ style }) => ({
	zIndex: 2,
	textIndent: '-9999px',
	width: '30px',
	height: '30px',
	border: 'none',
	cursor: 'pointer',
	transition: 'all .3s',
	...style,
}));

const EditButton = ({ type, children, onClick, style, name }) => {
	return (
		<StyledButton type={type} onClick={onClick} style={style} name={name}>
			{children}
		</StyledButton>
	);
};

export default EditButton;

EditButton.propTypes = {
	type: PropTypes.string,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	style: PropTypes.object,
	name: PropTypes.string,
};
