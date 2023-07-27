import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {};

const designSlice = createSlice({
	name: 'designs',
	initialState,
	reducers: {
		addDesign(state, action) {
			const newDesignsIds = Array.from({ length: action.payload.length }).map(
				() => uuidv4()
			);
			state[action.payload.id] = {
				id: action.payload.id,
				type: action.payload.type,
				designsIds: newDesignsIds,
			};

			return state;
		},
		deleteDesign(state, action) {
			return state.filter((item) => item.id !== action.payload);
		},
	},
});

export const { addDesign, deleteDesign } = designSlice.actions;

export default designSlice.reducer;
