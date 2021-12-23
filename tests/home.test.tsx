import { getByText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../src/pages/index';
import { Provider } from 'react-redux';
import { store } from '../src/modules/store';
import userEvent from '@testing-library/user-event';
import { todoSlice } from '../src/modules/slice/todos';

it('Should render hello text', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  expect(screen).toMatchSnapshot();
  expect(screen.getByText('Hello Nextjs')).toBeInTheDocument();
  const input: HTMLInputElement = screen.getByRole("textbox");
  const button = screen.getByText(/送信/);
  userEvent.type(input, 'hoge');
  expect(button).not.toBeDisabled();
  userEvent.click(button);
  expect(input.value).toBe("");
  screen.debug();
  expect(screen.getByText(/hoge/)).toBeInTheDocument();
  expect(screen.getAllByText(/hoge/)).toHaveLength(1);
  const completebutton = screen.getByText(/完了/);
  userEvent.click(completebutton);
  expect(screen.getByText('完了です')).toBeInTheDocument();
});

it('Todo function test', () => {
  let state = store.getState().todo;
  const unchangedTodo = state.todos.find((todo) => todo.id === 1);
  expect(unchangedTodo?.title).toBe('hoge');
  expect(unchangedTodo?.check).toBe(true);

  const { addTodo } = todoSlice.actions;
  store.dispatch(addTodo({title: "sample"}));
  state = store.getState().todo;
  const newTodo = state.todos.find((todo) => todo.id === 2);
  expect(newTodo?.title).toBe('sample');
  expect(newTodo?.check).toBe(false);
  expect(newTodo?.id).toBe(unchangedTodo && unchangedTodo.id + 1);
  
  //objectの場合はtoEqualを使用
  expect(newTodo).toEqual({
    title: 'sample',
    check: false,
    id: unchangedTodo && unchangedTodo.id + 1
  });
});
