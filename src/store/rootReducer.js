import { combineReducers } from '@reduxjs/toolkit';
import blockSlice from './slices/blockSlice';
import userSlice from './slices/userSlice';
import modalSlice from './slices/modalSlice';
import menuReducer from './menu/menuReducer';

export const rootReducer = combineReducers({
	blocks: blockSlice,
	user: userSlice,
	modal: modalSlice,
  menu: menuReducer,
});
