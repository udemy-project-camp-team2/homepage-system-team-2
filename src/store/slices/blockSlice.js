import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';


const initialState = {
  blocks: [],
};

export const layoutsConfig = [
  { type: 'container_one', numRectangles: 1 },
  { type: 'container_two', numRectangles: 2 },
  { type: 'container_three', numRectangles: 3 },
  { type: 'container_four', numRectangles: 4 },
];

const blockSlice = createSlice({
  name: 'blocks',
  initialState,
  reducers: {
    addBlock(state) {
      const layoutConfig = layoutsConfig[state.selectedLayout];
      const newBlocks = Array.from({ length: layoutConfig.numRectangles }, () => ({
        id: uuidv4(),
        type: '',
      }));
      state.blocks = [...state.blocks, ...newBlocks];
    },
    removeBlock(state, action) {
      state.blocks = state.blocks.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addBlock, removeBlock, setSelectedLayout } = blockSlice.actions;

export default blockSlice.reducer;
