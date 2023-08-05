import { createSlice } from '@reduxjs/toolkit';

const initialState = { selectedId: '' };

export const selectedIdSlice = createSlice({
	name: 'selectedId',
	initialState,
	reducers: {
		updateSelectedId(state, action) {
			state.selectedId = action.payload;
			return state;
		},
	},
});

export const { updateSelectedId } = selectedIdSlice.actions;

export default selectedIdSlice.reducer;
