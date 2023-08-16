import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

type ContainerType = {
	id: string;
	type: string;
	blocksIds: string[];
};

type InitialType = ContainerType[];

const storedValue = localStorage.getItem(
	(window.location.pathname as any).slice('/').at(-1)
);

const initialState: InitialType = storedValue ? JSON.parse(storedValue) : [];

const containerSlice = createSlice({
	name: 'containers',
	initialState,
	reducers: {
		addContainer(state, action: PayloadAction<number>) {
			const newContainer = {
				id: uuidv4(),
				type: '',
				blocksIds: [],
			};
			const newArray = [...state];
			newArray.splice(action.payload, 0, newContainer);
			return newArray;
		},
		removeContainer(state, action: PayloadAction<string>) {
			const filteredArray = state.filter((item) => item.id !== action.payload);
			return filteredArray;
		},
		updateLayoutType(
			state,
			action: PayloadAction<{ id: string; type: string; length: number }>
		) {
			const newState = [...state];
			const newBlocksIds = Array.from({ length: action.payload.length }, () =>
				uuidv4()
			);
			const updatedState = newState.map((item) =>
				item.id === action.payload.id
					? {
							...item,
							type: action.payload.type,
							blocksIds: newBlocksIds,
					  }
					: item
			);
			return updatedState;
		},
		updateOrderOfContainers(
			state,
			action: PayloadAction<{ id: string; name: string }>
		) {
			const newState = [...state];
			const targetIndex = newState.findIndex(
				(item) => item.id === action.payload.id
			);
			const spliced = newState.splice(targetIndex, 1);
			if (action.payload.name === 'container_up') {
				if (targetIndex - 1 < 0) return;
				newState.splice(targetIndex - 1, 0, ...spliced);
				return newState;
			} else {
				if (targetIndex + 1 > newState.length) return;
				newState.splice(targetIndex + 1, 0, ...spliced);
				return newState;
			}
		},
	},
});

export const {
	addContainer,
	removeContainer,
	updateLayoutType,
	updateOrderOfContainers,
} = containerSlice.actions;

export default containerSlice.reducer;
