import { combineReducers } from '@reduxjs/toolkit';
import containerSlice from './slices/containerSlice';
import modalSlice from './slices/modalSlice';
import blockSlice from './slices/blockSlice';
import userSlice from './slices/userSlice';
import menuReducer from './menu/menuReducer';
import selectedIdSlice from './slices/selectedIdSlice';

export const rootReducer = combineReducers({
	containers: containerSlice,
	modal: modalSlice,
	blocks: blockSlice,
	user: userSlice,
	menu: menuReducer,
	selectedId: selectedIdSlice,
});
