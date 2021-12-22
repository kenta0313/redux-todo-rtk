import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../src/pages/index';
import { Provider } from 'react-redux';
import { store } from '../src/modules/store';

it('Should render hello text', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  screen.debug();
  expect(screen.getByText('Hello Nextjs')).toBeInTheDocument();
});
