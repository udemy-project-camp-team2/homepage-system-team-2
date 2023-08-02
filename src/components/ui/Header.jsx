import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Logo from '../common/Logo';
import { styled } from 'styled-components';
import { logout } from '../../store/slices/userSlice';

const HeaderStyled = styled.header`
	display: flex;
	width: 100%;
	justify-content: center;
`;
const HeaderInner = styled.div`
	width: 1220px;
	height: 108px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Btns = styled.div`
	margin-left: auto;
`;

const Btn = styled.button`
	cursor: pointer;
	display: inline-block;
	padding: 0;
	margin-left: 15px;
	background: #fff;
	border: none;
	font-size: 12px;
	color: #030303;
	position: relative;
	z-index: 1;
	&::before {
		display: block;
		content: '';
		position: absolute;
		left: -8px;
		top: 1px;
		background: #b3b3b3;
		width: 1px;
		height: 12px;
	}
	&:first-child::before {
		display: none;
	}
`;

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const loginState = useSelector((state) => state.user.isLoggedIn);

	const handleLogout = () => {
		dispatch(logout());
		navigate('/admin');
	};
	return (
		<HeaderStyled>
			<HeaderInner>
				<Logo />
				<Btns>
					{loginState ? (
						<>
							<Btn>마이페이지</Btn>
							<Btn onClick={handleLogout}>로그아웃</Btn>
						</>
					) : (
						<Btn
							onClick={() => {
								navigate('/admin');
							}}
						>
							로그인
						</Btn>
					)}
				</Btns>
			</HeaderInner>
		</HeaderStyled>
	);
};

export default Header;
