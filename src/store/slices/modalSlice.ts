import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialType = {
	name: string;
	list: {};
	isOpen: boolean;
};

const initialState: InitialType = { name: '', list: {}, isOpen: false };

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		toggleModal(state, action: PayloadAction<{ name: string; list?: {} }>) {
			return (state = {
				...state,
				list: { ...action.payload.list },
				name: action.payload.name,
				isOpen: !state.isOpen,
			});
		},
	},
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
