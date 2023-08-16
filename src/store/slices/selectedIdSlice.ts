import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialType = {
	selectedId: string;
};

const initialState: InitialType = { selectedId: '' };

export const selectedIdSlice = createSlice({
	name: 'selectedId',
	initialState,
	reducers: {
		updateSelectedId(state, action: PayloadAction<string>) {
			state.selectedId = action.payload;
			return state;
		},
	},
});

export const { updateSelectedId } = selectedIdSlice.actions;

export default selectedIdSlice.reducer;
