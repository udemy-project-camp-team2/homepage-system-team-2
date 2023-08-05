import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button``;

const Button = ({ type, children, onClick }) => {
	return (
		<StyledButton type={type} onClick={onClick}>
			{children}
		</StyledButton>
	);
};

export default Button;

Button.propTypes = {
	type: PropTypes.string,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
};
