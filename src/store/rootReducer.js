import { combineReducers } from '@reduxjs/toolkit';
import blockSlice from './slices/blockSlice';

export const rootReducer = combineReducers({
	blocks: blockSlice,
});
