import React, { useState } from 'react';
import { menuLists } from '../../libs/menu-lists';

const MenuDetail = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleMenuToggle = (menu) => {
    if (expandedMenu === menu) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(menu);
    }
  };

  return (
    <div>
      <h2>메뉴 설정</h2>
      <p>메뉴 항목과 구조를 설정해주세요.</p>

      <button>메뉴 항목 추가</button>

      <div>
        <div>
          {Object.keys(menuLists).map((menu) => (
            <div key={menu}>
              <h3 onClick={() => handleMenuToggle(menu)} style={{ cursor: 'pointer' }}>
                {menu}
              </h3>
              {expandedMenu === menu && (
                <ul>
                  {menuLists[menu].map((item) => (
                    <li key={item.title}>{item.title}</li>
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

export default MenuDetail;
