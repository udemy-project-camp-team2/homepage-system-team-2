import { useCallback, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { menuLists } from '../libs/menu-lists';

const menuAdditionReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_MENU': {
			const { key } = action.payload;
			const newState = { ...state };
			const originalKeys = Object.keys(newState);

			const isExistingKey = originalKeys.some((el) => el.trim() === key.trim());

			if (isExistingKey) {
				alert(`Already existing Key!`);
				return;
			}

			newState[key] = [];

			return newState;
		}
		case 'ADD_LIST': {
			const { key, listTitle } = action.payload;
			const newState = { ...state };
			const isExistingTitle = newState[key].some(
				(el) => el.trim().toLowerCase() === listTitle.trim().toLowerCase()
			);

			if (isExistingTitle) {
				alert(`Already Existing Title!`);
				return;
			}

			const newList = {
				id: uuidv4(),
				title: listTitle,
				link: '/new-link',
			};

			newState[key] = newState[key].concat(newList);

			return newState;
		}
		default:
			return state;
	}
};

export const useMenuAddition = () => {
	const [lists, dispatch] = useReducer(menuAdditionReducer, menuLists);

	const addMenuHandler = useCallback((key) => {
		dispatch({ type: 'ADD_MENU', payload: { key } });
	}, []);

	const addListHandler = useCallback((key, listTitle) => {
		dispatch({ type: 'ADD_LIST', payload: { key, listTitle } });
	}, []);

	return { lists, addMenuHandler, addListHandler };
};
