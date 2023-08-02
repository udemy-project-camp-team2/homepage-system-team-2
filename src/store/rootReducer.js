import { combineReducers } from "@reduxjs/toolkit";
import menuReducer from "./menu/menuReducer"

export const rootReducer = combineReducers({
  menu: menuReducer,
})
