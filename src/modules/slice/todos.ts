import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  title: string;
  check: boolean;
};

type Todos = {
  todos: Todo[];
};

const initialState: Todos = {
  todos: []
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo['title']>) => {
      const newTodo = {
        id: state.todos.length > 0 ?  state.todos.reduce((a,b) => a.id > b.id ? a : b).id + 1 : 1,
        title: action.payload,
        check: false
      }
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    }
  }
});