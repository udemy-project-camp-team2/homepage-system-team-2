import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faGear, faTimes } from '@fortawesome/free-solid-svg-icons';
import { toggleMenu, deleteItem, updateItem, addMenuItem } from '../../store/menu/menuReducer';
import styled from 'styled-components';

const MenuDetail = () => {
  const expandedMenu = useSelector(state => state.menu.expandedMenu);
  const currentMenuLists = useSelector(state => state.menu.data);
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();

  // 메뉴 펼침/접기 토글 처리 함수
  const handleMenuToggle = (menu) => {
    dispatch(toggleMenu(menu));
  };

  // 항목 삭제 처리 함수
  const handleItemDelete = (menu, id, title) => {
    dispatch(deleteItem(menu, title, id));
    console.log(`${title} 삭제`);
  };

  // 항목 세부 정보 보기 처리 함수
  const handleItemDetails = (id, title, link) => {
    setSelectedItem((prevSelectedItem) => {
      if (prevSelectedItem && prevSelectedItem.id === id) {
        return { ...prevSelectedItem };
      } else {
        return { id, title, link };
      }
    });
  };

  // 항목 제목 변경 처리 함수
  const handleTitleChange = (e) => {
    setSelectedItem((prevSelectedItem) => ({
      ...prevSelectedItem,
      title: e.target.value,
    }));
  };

  // 항목 링크 변경 처리 함수
  const handleLinkChange = (e) => {
    setSelectedItem((prevSelectedItem) => ({
      ...prevSelectedItem,
      link: e.target.value,
    }));
  };

  // 항목 수정 확인 처리 함수
  const handleItemUpdate = () => {
    if (!selectedItem) return; // 수정 중인 아이템이 없으면 종료

    const { id, title } = selectedItem;
    const menu = Object.keys(currentMenuLists).find((menu) =>
      currentMenuLists[menu].some((item) => item.id === selectedItem.id)
    );

    dispatch(updateItem(menu, id, title, selectedItem.title, selectedItem.link));
    setSelectedItem(null);
  };

  // 메뉴 항목 추가 처리 함수
  const handleMenuAdd = (menu) => {
    const newItem = {
      id: uuidv4(),
      title: '새로운 항목',
      link: '/new-link',
    };

    dispatch(addMenuItem(menu, newItem));
    handleItemDetails(newItem.id, newItem.title, newItem.link);
  };

  console.log(selectedItem);

  return (
    <div>
      <h2>메뉴 설정</h2>
      <p>메뉴 항목과 구조를 설정해주세요.</p>

      {/* 메뉴 항목 추가 버튼 */}
      <button onClick={() => handleMenuAdd(expandedMenu)}>메뉴 항목 추가</button>

      <div>
        <div>
          {Object.keys(currentMenuLists).map((menu) => (
            <div key={menu}>
              {/* 메뉴 펼침/접기 아이콘 */}
              <MenuTitle onClick={() => handleMenuToggle(menu)}>
                <FontAwesomeIcon
                  icon={expandedMenu === menu ? faChevronDown : faChevronRight}
                />
                {menu}
              </MenuTitle>
              {expandedMenu === menu && (
                <ul>
                  {currentMenuLists[menu]?.map((item) => (
                    <li key={item.id}>
                      {/* 항목 제목과 아이콘 */}
                      <ItemTitle>
                        {item.title}
                      </ItemTitle>
                      <IconWrapper>
                        {/* 항목 세부 정보 보기 아이콘 */}
                        <FontAwesomeIcon
                          icon={faGear}
                          onClick={() => handleItemDetails(item.id, item.title, item.link)}
                        />
                        {/* 항목 삭제 버튼 */}
                        <FontAwesomeIcon
                          icon={faTimes}
                          onClick={() => handleItemDelete(menu, item.id, item.title)}
                        />
                      </IconWrapper>
                      {/* 항목 수정 폼 */}
                      {selectedItem && selectedItem.id === item.id && (
                        <ItemDetails>
                          <InputTitle
                            type="text"
                            value={selectedItem.title}
                            onChange={handleTitleChange}
                          />
                          <InputLink
                            type="text"
                            value={selectedItem.link}
                            onChange={handleLinkChange}
                          />
                          <button onClick={handleItemUpdate}>확인</button>
                        </ItemDetails>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MenuTitle = styled.h3`
  cursor: pointer;
`;

const ItemTitle = styled.span`
  cursor: pointer;
`;

const IconWrapper = styled.span`
  cursor: pointer;
  margin-left: 5px;
`;

const ItemDetails = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  margin-top: 10px;
`;

const InputTitle = styled.input`
  margin-bottom: 5px;
  width: 100%;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
`;

const InputLink = styled.input`
  margin-bottom: 5px;
  width: 100%;
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
`;

export default MenuDetail;
