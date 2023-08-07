import { menuLists } from '../../libs/menu-lists';

const initialState = {
  expandedMenu: null,
  data: menuLists,
};

export const addMenuItem = (menu, newItem) => {
  return {
    type: 'ADD_MENU_ITEM',
    menu,
    newItem,
  };
};

export const toggleMenu = (menu) => {
  return {
    type: 'TOGGLE_MENU',
    menu,
  };
};

export const deleteItem = (menu, id, title) => {
  return {
    type: 'DELETE_ITEM',
    menu,
    id,
    title,
  };
};

export const updateItem = (menu, id, title, newTitle, newLink) => {
  return {
    type: 'UPDATE_ITEM',
    menu,
    id,
    title,
    newTitle,
    newLink,
  };
};

export const updateMenuTitle = (menu, newTitle) => {
  return {
    type: 'UPDATE_MENU_TITLE',
    menu,
    newTitle,
  };
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'TOGGLE_MENU':
      // 토글 메뉴 액션 처리
      return {
        ...state,
        expandedMenu: state.expandedMenu === action.menu ? null : action.menu,
      };

    case 'DELETE_ITEM':
      if (action.id === action.id) {
        // 새로운 항목이면 DELETE_NEW_ITEM 액션을 디스패치하여 삭제
        const menuData = state.data[action.menu].filter((item) => item.id !== action.id);
        return {
          ...state,
          data: {
            ...state.data,
            [action.menu]: menuData,
          },
        };
      } else {
        // 기존 항목은 기존 방식으로 삭제
        return {
          ...state,
          data: {
            ...state.data,
            [action.menu]: state.data[action.menu].filter((item) => item.title !== action.title),
          },
        };
      }

    case 'UPDATE_ITEM':
      // 업데이트 액션 처리
      return {
        ...state,
        data: {
          ...state.data,
          [action.menu]: state.data[action.menu].map((item) =>
            item.id === action.id ? { 
              ...item, 
              title: 
                action.newTitle !== item.title && 
                !state.data[action.menu].some(existingItem => existingItem.title === action.newTitle) 
                  ? action.newTitle : item.title,
              link: 
                action.newLink !== item.link && 
                !state.data[action.menu].some(existingItem => existingItem.link === action.newLink) 
                  ? action.newLink : item.link
            } : item
          ),
        },
      };

    case 'ADD_MENU_ITEM':
      // 메뉴 항목 추가 액션 처리
      if (!state.data[action.menu]) {
        // 새로운 MenuList 추가
        return {
          ...state,
          data: {
            ...state.data,
            [action.menu]: [action.newItem],
          },
        };
      }
      // 해당 메뉴가 기존에 있으면 기존 데이터에 항목을 추가
      if (!state.data[action.menu].some(item => 
        item.title === action.newItem.title || item.link === action.newItem.link
      )) {
        return {
          ...state,
          data: {
            ...state.data,
            [action.menu]: [...state.data[action.menu], action.newItem],
          },
        };
      }
      // 중복이 있는 경우 기존 state 반환
      return state;

    case 'UPDATE_MENU_TITLE':
      if (!state.data || !state.data[action.menu]) {
        return state;
      }
      // action.menu에 해당하는 메뉴 이름을 action.newTitle로 변경, 상태 업데이트
      return {
        ...state,
        data: {
          ...state.data,
          [action.menu]: state.data[action.menu].map(item => {
            if (item.id === action.menu) { 
              return {
                ...item,
                title: action.newTitle,
              };
            }
            return item;
          }),
        },
      };

    default:
      return state;
  }
};

export default menuReducer;
