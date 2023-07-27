import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';


const initialState = {
  blocks: [],
  selectedLayout: 0,
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
    addBlock(state, action) {
      const layoutConfig = layoutsConfig[state.selectedLayout];
      const newBlocks = Array.from({ length: layoutConfig.numRectangles }, () => ({
        id: uuidv4(),
        type: '',
      }));

      const selectedIndex = state.blocks.findIndex((block) => block.id === action.payload);

      // 선택된 블록의 바로 아래에 새 블록 삽입
      if (selectedIndex !== -1) {
        state.blocks.splice(selectedIndex + 1, 0, ...newBlocks);
      } else {
        // 선택된 블록이 없는 경우, 맨 끝에 새 블록 삽입
        state.blocks.push(...newBlocks);
      }

    },
    
    removeBlock(state, action) {
      state.blocks = state.blocks.filter((item) => item.id !== action.payload);
    },

    // 컨테이너 이동
    moveBlockUpAndDown(state, action) {
      const { index, direction } = action.payload;
      const newIndex = direction === 'up' ? index - 1 : index + 1;

      if (newIndex >= 0 && newIndex < state.blocks.length) {
        const blockToMove = state.blocks[index];

        // 이동할 블록을 현재 위치에서 배열에서 제거
        state.blocks.splice(index, 1);

        // 이동할 블록을 새로운 위치에서 배열에 삽입
        state.blocks.splice(newIndex, 0, blockToMove);
      }
    },
  },
});

export const { addBlock, removeBlock, setSelectedLayout, moveBlockUpAndDown } = blockSlice.actions;

export default blockSlice.reducer;
