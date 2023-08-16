import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const StyledButton = styled.button<{ style: any }>(({ style }) => ({
	...style,
	zIndex: 2,
}));

const Button = ({ type, children, onClick, style, name }: ButtonProps) => {
	return (
		<StyledButton type={type} onClick={onClick} style={style} name={name}>
			{children}
		</StyledButton>
	);
};

export default Button;
