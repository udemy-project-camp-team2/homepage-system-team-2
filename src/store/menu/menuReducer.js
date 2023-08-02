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

export const deleteItem = (menu, title) => {
  return {
    type: 'DELETE_ITEM',
    menu,
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

const menuReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'TOGGLE_MENU':
      // 토글 메뉴 액션 처리
      return {
        ...state,
        expandedMenu: state.expandedMenu === action.menu ? null : action.menu,
      };

    case 'DELETE_ITEM':
      // 삭제 액션 처리
      if (action.id && action.id.startsWith("temp-")) {
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
            item.id === action.id ? { ...item, title: action.newTitle, link: action.newLink } : item
          ),
        },
      };

    case 'ADD_MENU_ITEM':
      // 메뉴 항목 추가 액션 처리
      if (!state.data[action.menu]) {
        // 해당 메뉴가 기존에 없으면 아무것도 변경하지 않음
        return state;

        // 새로운 MenuList 추가
        // return {
        //   ...state,
        //   data: {
        //     ...state.data,
        //     [action.menu]: [action.newItem],
        //   },
        // };
      }
      // 해당 메뉴가 기존에 있으면 기존 데이터에 항목을 추가
      return {
        ...state,
        data: {
          ...state.data,
          [action.menu]: [...state.data[action.menu], action.newItem],
        },
      };

    default:
      return state;
  }
};

export default menuReducer;
