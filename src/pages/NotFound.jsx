import { useNavigate } from 'react-router';
import Logo from '../components/common/Logo';
import { styled } from 'styled-components';

const NotFoundPage = styled.div`
	width: 500px;
	align-items: center;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	flex-direction: column;
`;
const MainText = styled.p`
	font-size: 25px;
	color: ${(props) => props.theme.colors.orange};
`;
const SubText = styled.p`
	margin: 0;
	font-size: 13px;
	text-align: center;
	color: ${(props) => props.theme.colors.gray.lighter};
`;
const Button = styled.button`
	margin-top: 40px;
	background: ${(props) => props.theme.colors.orange};
	border: none;
	width: 25%;
	line-height: 35px;
	border-radius: 20px;
	color: #fff;
	font-size: 12px;
	cursor: pointer;
`;
const NotFound = () => {
	const navigate = useNavigate();

	return (
		<NotFoundPage>
			<Logo />
			<MainText>해당 페이지를 찾을 수 없습니다.</MainText>
			<SubText>
				찾으려는 주소가 잘못 입력되었거나,
				<br />
				주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다.
				<br />
				입력하신 페이지의 주소가 정확한지 다시 한번 확인해주세요.
			</SubText>
			<Button
				onClick={() => {
					navigate('/admin');
				}}
			>
				로그인으로 가기
			</Button>
		</NotFoundPage>
	);
};

export default NotFound;
