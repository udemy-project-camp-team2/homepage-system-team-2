import { combineReducers } from '@reduxjs/toolkit';
import containerSlice from './slices/containerSlice';
import modalSlice from './slices/modalSlice';
import userSlice from './slices/userSlice';
import selectedIdSlice from './slices/selectedIdSlice';
import designSlice from './slices/designSlice';
import menuSlice from './slices/menuSlice';

export const rootReducer = combineReducers({
	containers: containerSlice,
	modal: modalSlice,
	user: userSlice,
	menu: menuSlice,
	selectedId: selectedIdSlice,
	design: designSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
