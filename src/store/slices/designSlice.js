import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {};

const designSlice = createSlice({
	name: 'design',
	initialState,
	reducers: {
		addDesign(state, action) {
			const { id, type, length } = action.payload;
			const newState = { ...state };

			const newDesignIds = Array.from({ length }, () => uuidv4());

			newState[id] = {
				id,
				type,
				designIds: newDesignIds,
				styles: {},
			};

			return newState;
		},

		updateDesignStyles(state, action) {
			const newState = { ...state };
			newState[action.payload.id]['styles'][action.payload.designId] = {
				...action.payload.designStyles,
			};

			return newState;
		},
	},
});

export const { addDesign } = designSlice.actions;

export default designSlice.reducer;
