import { combineReducers } from '@reduxjs/toolkit';
import containerSlice from './slices/containerSlice';
import selectedIdSlice from './slices/selectedIdSlice';
import modalSlice from './slices/modalSlice';
import blockSlice from './slices/blockSlice';
import userSlice from './slices/userSlice';
import menuReducer from './menu/menuReducer';

export const rootReducer = combineReducers({
	containers: containerSlice,
	selectedId: selectedIdSlice,
	modal: modalSlice,
	blocks: blockSlice,
	user: userSlice,
	menu: menuReducer,
});
