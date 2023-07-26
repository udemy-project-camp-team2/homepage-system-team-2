import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const blockSlice = createSlice({
	name: 'blocks',
	initialState,
	reducers: {
		addBlock(state, action) {
			const newBlock = {
				id: uuidv4(),
				type: '',
			};
			const newArray = [...state];
			newArray.splice(action.payload, 0, newBlock);
			return newArray;
		},
		removeBlock(state, action) {
			const filteredArray = state.filter((item) => item.id !== action.payload);
			return filteredArray;
		},
	},
});

export const { addBlock, removeBlock, addLayout } = blockSlice.actions;

export default blockSlice.reducer;
