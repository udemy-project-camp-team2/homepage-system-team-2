import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledLogo = styled.h1`
	display: inline-block;
	background: url(/images/logos/woongjin.jpg) 0 0 no-repeat;
	width: 163px;
	height: 88px;
	cursor: pointer;
`;

const Logo = () => {
	const navigate = useNavigate();
	return <StyledLogo onClick={() => navigate('/')} />;
};

export default Logo;
