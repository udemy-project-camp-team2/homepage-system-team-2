import { combineReducers } from '@reduxjs/toolkit';
import modalSlice from './slices/modalSlice';

export const rootReducer = combineReducers({
	modal: modalSlice,
});
