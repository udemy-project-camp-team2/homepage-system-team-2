import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

type InitialType = {
	[key: string]: {
		id: string;
		type: string;
		designIds: string[];
		styles: {};
	};
};

const initialState: InitialType = {};

const designSlice = createSlice({
	name: 'design',
	initialState,
	reducers: {
		addDesign(
			state,
			action: PayloadAction<{ id: string; type: string; length: number }>
		) {
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

		// updateDesignStyles(state, action) {
		// 	const newState = { ...state };
		// 	newState[action.payload.id]['styles'][action.payload.designId] = {
		// 		...action.payload.designStyles,
		// 	};

		// 	return newState;
		// },
	},
});

export const { addDesign } = designSlice.actions;

export default designSlice.reducer;
