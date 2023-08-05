import { combineReducers } from '@reduxjs/toolkit';
import containerSlice from './slices/containerSlice';
import modalSlice from './slices/modalSlice';
import userSlice from './slices/userSlice';
import menuReducer from './menu/menuReducer';
import selectedIdSlice from './slices/selectedIdSlice';
import designSlice from './slices/designSlice';

export const rootReducer = combineReducers({
	containers: containerSlice,
	modal: modalSlice,
	user: userSlice,
	menu: menuReducer,
	selectedId: selectedIdSlice,
	design: designSlice,
});
