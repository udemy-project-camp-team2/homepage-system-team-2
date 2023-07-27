import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

const selectedIdSlice = createSlice({
	name: 'selectedId',
	initialState,
	reducers: {
		updateSelectedId(state, action) {
			if (state.value === action.payload) {
				state.value = '';
			} else {
				state.value = action.payload;
			}
			return state;
		},
	},
});

export const { updateSelectedId } = selectedIdSlice.actions;

export default selectedIdSlice.reducer;
