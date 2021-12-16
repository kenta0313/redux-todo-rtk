import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
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
    addTodo: (state, action: PayloadAction<Pick<Todo, 'title'>>) => {
      const newTodo = {
        id: state.todos.length > 0 ?  state.todos.reduce((a,b) => a.id > b.id ? a : b).id + 1 : 1,
        title: action.payload.title,
        check: false
      }
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    },
    deleteTodo: (state, action: PayloadAction<Pick<Todo, 'id'>>) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id)
      }
    }
  }
});