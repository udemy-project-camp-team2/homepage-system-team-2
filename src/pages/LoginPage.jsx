import LoginForm from "../components/login/LoginForm";
import { styled } from 'styled-components';
import Logo from '../components/common/Logo';

const LoginWrap = styled.div`
	position: fixed;
	top : 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	width: 394px;
	height: 410px;
	text-align: center;
`;


const LoginPage = () => {
	return (
		<LoginWrap>
			<Logo/>
			<LoginForm/>	
		</LoginWrap>
		
	);
};

export default LoginPage;
