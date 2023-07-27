import { combineReducers } from '@reduxjs/toolkit';
import containerSlice from './slices/containerSlice';

export const rootReducer = combineReducers({
	containers: containerSlice,
});
