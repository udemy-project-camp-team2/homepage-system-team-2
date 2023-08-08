/* eslint-disable react/prop-types */
import styled from 'styled-components';
import MenuTitle from './MenuTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronDown,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import MenuItem from './MenuItem';

const MenuList = ({
	currentMenuLists,
	expandedMenu,
	handleMenuToggle,
	handleMenuTitleChange,
	handleItemDelete,
	handleItemDetails,
	selectedItem,
	handleTitleChange,
	handleLinkChange,
	handleItemUpdate,
}) => {
	return (
		<div>
			{Object.keys(currentMenuLists).map((menu) => (
				<div key={menu}>
					{/* 메뉴 펼침/접기 아이콘 */}
					<MenuTitles>
						<FontAwesomeIcon
							icon={expandedMenu === menu ? faChevronDown : faChevronRight}
							onClick={() => handleMenuToggle(menu)}
						/>
						<MenuTitle
							onMenu={() => {
								handleMenuToggle(menu);
							}}
							menu={menu}
							onSave={(newTitle) => handleMenuTitleChange(menu, newTitle)}
						/>
					</MenuTitles>
					{expandedMenu === menu && (
						<ul>
							{currentMenuLists[menu]?.map((item) => (
								<MenuItem
									key={item.id}
									item={item}
									selectedItem={selectedItem}
									handleItemDelete={() =>
										handleItemDelete(menu, item.id, item.title)
									}
									handleItemDetails={handleItemDetails}
									handleTitleChange={handleTitleChange}
									handleLinkChange={handleLinkChange}
									handleItemUpdate={handleItemUpdate}
								/>
							))}
						</ul>
					)}
				</div>
			))}
		</div>
	);
};

const MenuTitles = styled.h3`
	cursor: pointer;
	display: flex;
	align-items: center;

	svg {
		margin-right: 5px;
	}
`;

export default MenuList;
