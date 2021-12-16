import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slice/todos";

const rootReducer = combineReducers({
  todo: todoSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer
});