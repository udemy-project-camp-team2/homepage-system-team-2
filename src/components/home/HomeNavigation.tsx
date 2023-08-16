import styled from 'styled-components';
import { useSelector } from '../../store/hooks';
import HomeNavigationDetail from './HomeNavigationDetail';

const Wrapper = styled.div`
	margin: 100px auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: white;
	font-size: 19px;
	background: ${(props) => props.theme.colors.orange};
	font-weight: bold;
`;

const HomeNavigation = () => {
	const lists = useSelector((state) => state.menu);

	return (
		<Wrapper>
			{Object.keys(lists).map((menuName) => (
				<HomeNavigationDetail key={menuName} menuName={menuName} />
			))}
		</Wrapper>
	);
};

export default HomeNavigation;
