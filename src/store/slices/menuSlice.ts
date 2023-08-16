import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { MenuListsType, menuLists } from '../../libs/menu-lists';

type InitialType = MenuListsType;

const initialState: InitialType = localStorage.getItem('menus')
	? JSON.parse(localStorage.getItem('menus') as string)
	: menuLists;

const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		addMenu(state, action: PayloadAction<{ key: string }>) {
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
		addList(state, action: PayloadAction<{ key: string; listTitle: string }>) {
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
				link: uuidv4(),
			};

			newState[key] = newState[key].concat(newList);

			return newState;
		},
		updateMenu(state, action: PayloadAction<{ key: string; newKey: string }>) {
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

		updateList(
			state,
			action: PayloadAction<{
				id: string;
				key: string;
				newTitle: string;
				newLink: string;
			}>
		) {
			const { key, id, newTitle, newLink } = action.payload;

			const newState = { ...state };

			const isExistingTitle = newState[key]
				.filter((el) => el.title !== newTitle)
				.some((el) => el.title === newTitle);

			if (isExistingTitle) {
				alert(`Already Existing Title`);
				return;
			}

			const isExistingLink = newState[key]
				.filter((el) => el.link !== newLink)
				.some((el) => el.link === newLink);

			if (isExistingLink) {
				alert(`Already Existing Link!`);
				return;
			}

			newState[key] = newState[key].map((item) =>
				item.id === id ? { ...item, title: newTitle, link: newLink } : item
			);

			return newState;
		},

		deleteMenu(state, action: PayloadAction<{ key: string }>) {
			const { key } = action.payload;

			const newState = { ...state };

			delete newState[key];

			return newState;
		},

		deleteList(state, action: PayloadAction<{ id: string; key: string }>) {
			const { key, id } = action.payload;

			const newState = { ...state };

			newState[key] = newState[key].filter((item) => item.id !== id);

			return newState;
		},

		duplicateList(
			state,
			action: PayloadAction<{
				newLink: string;
				duplicatedKey: string;
				newTitle: string;
			}>
		) {
			const { duplicatedKey, newTitle, newLink } = action.payload;

			const newState = { ...state };

			const isExistingTitle = newState[duplicatedKey].some(
				(el) => el.title === newTitle
			);

			if (isExistingTitle) {
				alert(`Already Existing Title`);
				return;
			}

			const isExistingLink = newState[duplicatedKey].some(
				(el) => el.link === newLink
			);

			if (isExistingLink) {
				alert(`Already Existing Link`);
				return;
			}

			let reg = /^[a-z0-9_-]{2,10}$/;

			if (reg.test(newLink)) {
				alert(`특수문자는 제외해주시길 바랍니다!`);
				return;
			}

			if (newTitle.length === 0 || newLink.length === 0) {
				alert(`한 글자라도 입력하셔야 합니다!`);
				return;
			}

			const newList = {
				id: uuidv4(),
				title: newTitle,
				link: `/${newLink}`,
			};

			newState[duplicatedKey] = newState[duplicatedKey].concat(newList);

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
	duplicateList,
} = menuSlice.actions;

export default menuSlice.reducer;
