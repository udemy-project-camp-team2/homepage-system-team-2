import { combineReducers } from '@reduxjs/toolkit';
import containerSlice from './slices/containerSlice';
import selectedIdSlice from './slices/selectedIdSlice';
import designSlice from './slices/designSlice';

export const rootReducer = combineReducers({
	containers: containerSlice,
	selectedId: selectedIdSlice,
	designs: designSlice,
});
