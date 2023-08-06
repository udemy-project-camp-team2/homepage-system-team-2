import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button(({ style }) => ({
	...style,
	zIndex: 2,
}));

const Button = ({ type, children, onClick, style, name }) => {
	return (
		<StyledButton type={type} onClick={onClick} style={style} name={name}>
			{children}
		</StyledButton>
	);
};

export default Button;

Button.propTypes = {
	type: PropTypes.string,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	style: PropTypes.object,
	name: PropTypes.string,
};
