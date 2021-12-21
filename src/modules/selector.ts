import { store } from "./store";

export type RootState = ReturnType<typeof store.getState>;
export const todoSelector = (state: RootState) => state.todo.todos;
