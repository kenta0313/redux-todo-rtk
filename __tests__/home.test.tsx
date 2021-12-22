import { getByText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../src/pages/index';
import { Provider } from 'react-redux';
import { store } from '../src/modules/store';
import userEvent from '@testing-library/user-event';

it('Should render hello text', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  expect(screen.getByText('Hello Nextjs')).toBeInTheDocument();
  const input: HTMLInputElement = screen.getByRole("textbox");
  const button = screen.getByText(/送信/);
  userEvent.type(input, 'hoge');
  expect(button).not.toBeDisabled();
  userEvent.click(button);
  expect(input.value).toBe("");
  screen.debug();
  expect(screen.getByText(/hoge/)).toBeInTheDocument();
  const completebutton = screen.getByText(/完了/);
  userEvent.click(completebutton);
  expect(screen.getByText('完了です')).toBeInTheDocument();

});
