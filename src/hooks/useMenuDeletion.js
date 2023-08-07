import { useCallback, useReducer } from 'react';
import { menuLists } from '../libs/menu-lists';

const menuDeletionReducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_MENU': {
			const { key } = action.payload;

			const newState = { ...state };

			delete newState[key];

			return newState;
		}
		case 'DELETE_LIST': {
			const { key, id } = action.payload;

			const newState = { ...state };

			newState[key] = newState[key].filter((item) => item.id !== id);

			return newState;
		}
		default:
			return state;
	}
};

export const useMenuDeletion = () => {
	const [lists, dispatch] = useReducer(menuDeletionReducer, menuLists);

	const deleteMenuHandler = useCallback((key) => {
		dispatch({ type: 'DELETE_MENU', payload: { key } });
	}, []);

	const deleteListHandler = useCallback((key, id) => {
		dispatch({ type: 'DELETE_LIST', payload: { key, id } });
	}, []);

	return { lists, deleteMenuHandler, deleteListHandler };
};
