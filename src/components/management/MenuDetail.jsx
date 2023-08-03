import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faGear, faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import MenuTitle from './MenuTitle';
import useMenuToggle from '../../hooks/useMenuToggle';
import useItemDelete from '../../hooks/useItemDelete';
import useItemDetails from '../../hooks/useItemDetails';
import useMenuAdd from '../../hooks/useItemDetails';
import useMenuTitleChange from '../../hooks/useMenuTitleChange';

const MenuDetail = () => {
  const { expandedMenu, handleMenuToggle } = useMenuToggle();
  const { handleItemDelete } = useItemDelete();
  const { selectedItem, handleItemDetails, handleTitleChange, handleLinkChange, handleItemUpdate,  } = useItemDetails();
  const { handleMenuAdd } = useMenuAdd();
  const { handleMenuTitleChange } = useMenuTitleChange();
  const currentMenuLists = useSelector(state => state.menu.data);
  

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
              <MenuTitles onClick={() => handleMenuToggle(menu)}>
                <FontAwesomeIcon icon={expandedMenu === menu ? faChevronDown : faChevronRight} />
                <MenuTitle menu={menu} onSave={(newTitle) => handleMenuTitleChange(menu, newTitle)}  />
              </MenuTitles>
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

const MenuTitles = styled.h3`
  cursor: pointer;
  display: flex;
  align-items: center;

    // 화살표 아이콘에 스타일을 추가합니다.
  svg {
    margin-right: 5px;
  }
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
