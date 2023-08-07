import { useCallback, useReducer } from 'react';
import { menuLists } from '../libs/menu-lists';

const menuUpdateReducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE_MENU': {
			const { key, newKey } = action.payload;

			const newState = [state];

			const renameMap = { [key]: newKey };

			const res = newState.map((obj) =>
				Object.fromEntries(
					Object.entries(obj).map(([key, value]) => [
						renameMap[key] ?? key,
						value,
					])
				)
			);

			return res[0];
		}
		case 'UPDATE_LIST': {
			const { key, id, newTitle, newLink } = action.payload;

			const newState = { ...state };

			const isExistingTitle = newState[key].some(
				(el) => el.title.trim().toLowerCase() === newTitle.trim().toLowerCase()
			);

			if (isExistingTitle) {
				alert(`Already Existing Title`);
				return;
			}

			newState[key] = newState[key].map((item) =>
				item.id === id ? { ...item, title: newTitle, link: newLink } : item
			);

			return newState;
		}
		default:
			return state;
	}
};

export const useMenuUpdate = () => {
	const [lists, dispatch] = useReducer(menuUpdateReducer, menuLists);

	const updateMenuHandler = useCallback((key) => {
		dispatch({ type: 'UPDATE_MENU', payload: { key } });
	}, []);

	const updateListHandler = useCallback((key, id) => {
		dispatch({ type: 'UPDATE_LIST', payload: { key, id } });
	}, []);

	return { lists, updateListHandler, updateMenuHandler };
};
