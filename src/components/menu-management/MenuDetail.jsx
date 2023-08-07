// import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addMenuItem } from '../../store/menu/menuReducer';
import useMenuToggle from '../../hooks/useMenuToggle';
import useItemDelete from '../../hooks/useItemDelete';
import useItemDetails from '../../hooks/useItemDetails';
import useMenuTitleChange from '../../hooks/useMenuTitleChange';
import MenuList from './MenuList';
import { useState } from 'react';


const MenuDetail = () => {
  const { expandedMenu, handleMenuToggle } = useMenuToggle();
  const { handleItemDelete } = useItemDelete();
  const { selectedItem, handleItemDetails, handleTitleChange, handleLinkChange, handleItemUpdate,  } = useItemDetails();
  const { handleMenuTitleChange } = useMenuTitleChange();
  const currentMenuLists = useSelector(state => state.menu.data);
  const dispatch = useDispatch();

  const [itemCount, setItemCount] = useState(1);

  // 메뉴 항목 추가 처리 함수
  const handleMenuAdd = (menu) => {
    const newItem = {
      id: uuidv4(),
      title: `새로운 항목 ${itemCount}`,
      link: `/new-link/${itemCount}`,
    };

    dispatch(addMenuItem(menu, newItem));
    handleItemDetails(newItem.id, newItem.title, newItem.link);

    setItemCount(itemCount + 1);
  };


  return (
    <div>
      <h2>메뉴 설정</h2>
      <p>메뉴 항목과 구조를 설정해주세요.</p>

      {/* 메뉴 항목 추가 버튼 */}
      <button onClick={() => handleMenuAdd(expandedMenu)}>메뉴 항목 추가</button>

      <div>
        <MenuList
          currentMenuLists={currentMenuLists}
          expandedMenu={expandedMenu}
          handleMenuToggle={handleMenuToggle}
          handleMenuTitleChange={handleMenuTitleChange}
          handleItemDelete={handleItemDelete}
          handleItemDetails={handleItemDetails}
          selectedItem={selectedItem}
          handleTitleChange={handleTitleChange}
          handleLinkChange={handleLinkChange}
          handleItemUpdate={handleItemUpdate}
        />
      </div>
    </div>
  );
};


export default MenuDetail;
