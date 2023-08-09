import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import MenuManagementList from './MenuManagementList';
import MenuManagementInput from './MenuManagementInput';
import { styled } from 'styled-components';

const MenuWrapper = styled.article`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const MenuText = styled.div`
	color: ${(props) => props.theme.colors.gray.darker};
		
		h3, p {
			margin: 0;
		}

		p {
			padding-top: 5px;
			font-size: 0.9rem;
		}
`;

const MenuListWrapper = styled.div`
	margin-top: 20px;
  background-color: #f3f3f3;
  padding: 2rem 2.5rem;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const MenuManagement = () => {
	const lists = useSelector((state) => state.menu);

	const keys = useMemo(() => {
		return Object.keys(lists);
	}, [lists]);

	const detail = keys.map((list) => (
		<MenuManagementList key={list} title={list} lists={lists[list]} />
	));

	return (
		<article>
			<MenuWrapper>
				<MenuText>
					<h3>메뉴 설정</h3>
					<p>메뉴 항목과 구조를 설정해주세요.</p>
				</MenuText>
				<MenuManagementInput values={keys} />
			</MenuWrapper>
			<MenuListWrapper>
				{detail}
			</MenuListWrapper>
		</article>
	);
};

export default MenuManagement;
