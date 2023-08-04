import { createSlice } from '@reduxjs/toolkit';

const initialState = { list: {}, name: '', isOpen: false };

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		toggleModal(state, action) {
			return (state = {
				...state,
				list: { ...state.list, ...action.payload.list },
				name: action.payload.name,
				isOpen: !state.isOpen,
			});
		},
	},
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
