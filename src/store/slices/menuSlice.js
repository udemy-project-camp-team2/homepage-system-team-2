import { createSlice } from '@reduxjs/toolkit';
import { menuLists } from '../../libs/menu-lists';

const initialState = menuLists;

const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		updateMenuInfo(state, action) {
			const { key, title } = action.payload;
			console.log(key, title);
		},
	},
});

export const { updateMenuInfo } = menuSlice.actions;

export default menuSlice.reducer;
