import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api";
import { todoSlice } from "./slice/todos";

const rootReducer = combineReducers({
  todo: todoSlice.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
