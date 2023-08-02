import React, { useState } from 'react';
import { menuLists } from '../../libs/menu-lists';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faGear, faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const MenuDetail = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [currentMenuLists, setCurrentMenuLists] = useState(menuLists);

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
    console.log(`${title}를 ${menu}에서 삭제했습니다.`);
  };

  return (
    <div>
      <h2>메뉴 설정</h2>
      <p>메뉴 항목과 구조를 설정해주세요.</p>

      <button>메뉴 항목 추가</button>

      <div>
        <div>
          {Object.keys(currentMenuLists).map((menu) => (
            <div key={menu} className="menu-item">
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
                      {item.title}
                      <IconWrapper>
                        <FontAwesomeIcon icon={faGear} />
                        <FontAwesomeIcon
                          icon={faTimes}
                          onClick={() => handleItemDelete(menu, item.title)}
                        />
                      </IconWrapper>
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

const IconWrapper = styled.span`
  cursor: pointer;
  margin-left: 5px;
`;

export default MenuDetail;
