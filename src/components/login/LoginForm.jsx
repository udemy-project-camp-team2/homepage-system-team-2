import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';

const LoginFormStyled = styled.form``;
const Wrapper = styled.div`
	& + & {
		margin-top: 1rem;
	}
	position: relative;
`;
const Input = styled.input`
	width: 100%;
	outline: none;
	height: 60px;
	box-sizing: border-box;
	border-radius: 10px;
	border: none;
	background: #f3f3f3;
	padding: 30px 15px 10px 15px;
	color: #030303;
	font-size: 16px;
	&:focus {
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 25%);
		border: 1px solid #000;
	}
`;
const Label = styled.label`
	color: ${(props) => props.theme.colors.gray.darker};
	font-size: 12px;
	line-height: 14px;
	position: absolute;
	left: 15px;
	top: 10px;
`;
const Require = styled.span`
	display: inline-block;
	margin-left: 5px;
	color: #ef4565;
`;
const Userbtns = styled.div`
	display: flex;
`;
const Btn = styled.div`
	margin-left: ${(props) => props.$left || 'unset'};
	margin-right: ${(props) => props.$right || 'unset'};
	color: ${(props) => props.theme.colors.gray.darker};
	font-size: 14px;
`;
const LoginBtn = styled.button`
	margin-top: 40px;
	background: ${(props) => props.theme.colors.orange};
	border: none;
	width: 100%;
	line-height: 57px;
	border-radius: 10px;
	color: #fff;
	font-size: 16px;
	cursor: pointer;
`;
const Wmsg = styled.p`
	text-align: left;
	font-size: 12px;
	color: ${(props) => props.theme.colors.orange};
`;
const User = {
	email: 'test@naver.com',
	pw: 'test',
};

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [pw, setPw] = useState('');
	const [error, setError] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePw = (e) => {
		setPw(e.target.value);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		setEmail('');
		setPw('');
		try {
			if (User.email === email && User.pw === pw) {
				await dispatch(login({ email, pw }));
				setError(false);
				navigate('/admin/management');
			} else {
				setError(true);
			}
		} catch (error) {
			error('로그인에 실패했습니다');
		}
	};

	return (
		<LoginFormStyled onSubmit={handleLogin}>
			<Wrapper>
				<Label>
					Email <Require>*</Require>
				</Label>
				<Input type="text" onChange={handleEmail} value={email} />
			</Wrapper>

			<Wrapper>
				<Label>
					Password <Require>*</Require>
				</Label>
				<Input type="password" onChange={handlePw} value={pw} />
			</Wrapper>
			{error === true ? (
				<Wrapper>
					<Wmsg>이메일과 비밀번호를 확인해주세요.</Wmsg>
				</Wrapper>
			) : null}
			<Wrapper>
				<Userbtns>
					<Btn $right="auto">계정 만들기</Btn>
					<Btn $left="auto">비밀번호를 잊어버리셨나요?</Btn>
				</Userbtns>
			</Wrapper>
			<Wrapper>
				<LoginBtn type="submit">로그인</LoginBtn>
			</Wrapper>
		</LoginFormStyled>
	);
};

export default LoginForm;
