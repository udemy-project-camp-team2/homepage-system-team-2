import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { menuLists } from '../../libs/menu-lists';

const initialState = menuLists;

const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		addMenu(state, action) {
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
		},
		addList(state, action) {
			const { key, listTitle } = action.payload;

			const newState = { ...state };

			const isExistingTitle = newState[key].some(
				(el) => el.title.trim().toLowerCase() === listTitle.trim().toLowerCase()
			);

			if (isExistingTitle) {
				alert(`Already Existing Title`);
				return;
			}

			const newList = {
				id: uuidv4(),
				title: listTitle,
				link: '/new-link',
			};

			newState[key] = newState[key].concat(newList);

			return newState;
		},
		updateMenu(state, action) {
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
		},

		updateList(state, action) {
			const { key, id, newTitle, newLink } = action.payload;

			const newState = { ...state };

			const isExistingTitle = newState[key].some((el) => el.title === newTitle);

			if (isExistingTitle) {
				alert(`Already Existing Title`);
				return;
			}

			newState[key] = newState[key].map((item) =>
				item.id === id ? { ...item, title: newTitle, link: newLink } : item
			);

			return newState;
		},

		deleteMenu(state, action) {
			const { key } = action.payload;

			const newState = { ...state };

			delete newState[key];

			return newState;
		},

		deleteList(state, action) {
			const { key, id } = action.payload;

			const newState = { ...state };

			newState[key] = newState[key].filter((item) => item.id !== id);

			return newState;
		},
	},
});

export const {
	addMenu,
	addList,
	updateMenu,
	updateList,
	deleteMenu,
	deleteList,
} = menuSlice.actions;

export default menuSlice.reducer;
