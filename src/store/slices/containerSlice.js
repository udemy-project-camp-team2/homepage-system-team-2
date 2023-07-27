import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const containerSlice = createSlice({
	name: 'containers',
	initialState,
	reducers: {
		addContainer(state, action) {
			const newBlock = {
				id: uuidv4(),
				type: '',
				blocksIds: [],
			};
			const newArray = [...state];
			newArray.splice(action.payload, 0, newBlock);
			return newArray;
		},
		removeContainer(state, action) {
			const filteredArray = state.filter((item) => item.id !== action.payload);
			return filteredArray;
		},
		updateLayoutType(state, action) {
			const newState = [...state];
			const newBlocksIds = new Array(action.payload.length);
			const updatedState = newState.map((item) =>
				item.id === action.payload.id
					? {
							...item,
							type: action.payload.type,
							blocksIds: newBlocksIds.map((_) => uuidv4()),
					  }
					: item
			);
			return updatedState;
		},
	},
});

export const { addContainer, removeContainer, updateLayoutType } =
	containerSlice.actions;

export default containerSlice.reducer;
