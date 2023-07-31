import { createSlice } from '@reduxjs/toolkit';

const initialState = { isShown: false };

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		toggleModal(state) {
			state.isShown = !state.isShown;
		},
	},
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
