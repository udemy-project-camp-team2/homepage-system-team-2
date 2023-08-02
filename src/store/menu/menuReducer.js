import { menuLists } from '../../libs/menu-lists';

const initialState = {
  expandedMenu: null,
  data: menuLists,
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


const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        expandedMenu: state.expandedMenu === action.menu ? null : action.menu,
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        data: {
          ...state.data,
          [action.menu]: state.data[action.menu].filter((item) => item.title !== action.title),
        },
      };
    default:
      return state;
  }
};

export default menuReducer;
