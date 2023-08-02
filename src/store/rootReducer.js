import { combineReducers } from '@reduxjs/toolkit';
import blockSlice from './slices/blockSlice';
import userSlice from './slices/userSlice';

export const rootReducer = combineReducers({
	blocks: blockSlice,
	user: userSlice,
});
