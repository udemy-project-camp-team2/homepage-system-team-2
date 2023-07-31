import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '', name: '' };

const selectedIdSlice = createSlice({
	name: 'selectedId',
	initialState,
	reducers: {
		updateSelectedId(state, action) {
			if (state.value === action.payload) {
				return { ...state, value: '', name: '' };
			} else {
				return {
					...state,
					value: action.payload.id,
					name: action.payload.name,
				};
			}
		},
	},
});

export const { updateSelectedId } = selectedIdSlice.actions;

export default selectedIdSlice.reducer;
