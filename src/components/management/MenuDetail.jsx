import React, { useState } from 'react';
import { menuLists } from '../../libs/menu-lists';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faGear, faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const MenuDetail = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [currentMenuLists, setCurrentMenuLists] = useState(menuLists);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleMenuToggle = (menu) => {
    if (expandedMenu === menu) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(menu);
    }
  };

  const handleItemDelete = (menu, title) => {
    const updatedMenuLists = {
      ...currentMenuLists,
      [menu]: currentMenuLists[menu].filter((item) => item.title !== title),
    };
    setCurrentMenuLists(updatedMenuLists);
    console.log(`${title} 삭제`);
  };

  const handleItemDetails = (title, link) => {
    setSelectedItem((prevSelectedItem) => {
      if (prevSelectedItem && prevSelectedItem.title === title) {
        return null;
      } else {
        return { title, link };
      }
    });
  };

  console.log('selectedItem:', selectedItem);

  return (
    <div>
      <h2>메뉴 설정</h2>
      <p>메뉴 항목과 구조를 설정해주세요.</p>

      <button>메뉴 항목 추가</button>

      <div>
        <div>
          {Object.keys(currentMenuLists).map((menu) => (
            <div key={menu}>
              <MenuTitle onClick={() => handleMenuToggle(menu)}>
                <FontAwesomeIcon
                  icon={expandedMenu === menu ? faChevronDown : faChevronRight}
                />
                {menu}
              </MenuTitle>
              {expandedMenu === menu && (
                <ul>
                  {currentMenuLists[menu].map((item) => (
                    <li key={item.title}>
                      <ItemTitle>
                        {item.title}
                      </ItemTitle>
                      <IconWrapper>
                        <FontAwesomeIcon
                          icon={faGear}
                          onClick={() => handleItemDetails(item.title, item.link)}
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          onClick={() => handleItemDelete(menu, item.title)}
                        />
                      </IconWrapper>
                      {selectedItem && selectedItem.title === item.title && (
                        <ItemDetails>
                          <InputTitle
                            type="text"
                            value={selectedItem.title}
                          />
                          <InputLink
                            type="text"
                            value={selectedItem.link}
                          />
                          <button>확인</button>
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
