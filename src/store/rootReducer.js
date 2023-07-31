import { combineReducers } from '@reduxjs/toolkit';
import containerSlice from './slices/containerSlice';
import selectedIdSlice from './slices/selectedIdSlice';
import modalSlice from './slices/modalSlice';

export const rootReducer = combineReducers({
	containers: containerSlice,
	selectedId: selectedIdSlice,
	modal: modalSlice,
});
