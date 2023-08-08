import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import DropdownMenu from './HomeNavigationDetail'; 

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
	const [openMenu, setOpenMenu] = useState(null);
	const lists = useSelector((state) => state.menu);

	const handleMenuClick = (menu) => {
		setOpenMenu(openMenu === menu ? null : menu);
	};

	return (
		<Wrapper>
			{Object.keys(lists).map((menuName) => (
				<DropdownMenu
					key={menuName}
					menuName={menuName}
					openMenu={openMenu}
					handleMenuClick={handleMenuClick}
				/>
			))}
		</Wrapper>
	);
};

export default HomeNavigation;
