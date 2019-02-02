import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { Provider } from 'react-redux';
import { render as rtlRender, fireEvent } from 'react-testing-library';
import Counter from '../components/Counter';
import { createStore } from 'redux';

import { StoreCounterState, CounterStatus } from '../types';
import { rootReducer } from '../reducers/';

function render(ui: any, initialState?: StoreCounterState) {
  const store = createStore(rootReducer, { counterState: initialState });

  return {
    ...rtlRender(<Provider store={store}>{ui}</Provider>),
    store
  };
}

test('counter initialized correctly', () => {
  const { getByTestId, getByText, debug } = render(<Counter />);

  getByText(/Click plus and reach/i);

  const input = getByTestId('counter-value-input');
  expect(input.getAttribute('value')).toBe('0');

  expect(getByTestId('counter-increment')).not.toHaveAttribute('disabled');
  expect(getByTestId('counter-decrement')).toHaveAttribute('disabled');
});

test('can increment the value', () => {
  const { getByTestId, debug } = render(<Counter />);

  const input = getByTestId('counter-value-input');
  expect(input.getAttribute('value')).toBe('0');

  const incrment = getByTestId('counter-increment');
  fireEvent.click(incrment);

  expect(input.getAttribute('value')).toBe('1');
});

test('can not decrement the value when counter value is 0', () => {
  const { getByTestId, getByText, debug } = render(<Counter />);

  const input = getByTestId('counter-value-input');

  expect(input.getAttribute('value')).toBe('0');

  const decrement = getByTestId('counter-decrement');
  fireEvent.click(decrement);

  expect(input.getAttribute('value')).toBe('0');
});

test('can decrement the value', () => {
  const { getByTestId, getByText, debug, store } = render(<Counter />, {
    counterValue: 2,
    maxValue: 5,
    counterStatus: CounterStatus.Active
  });

  const input = getByTestId('counter-value-input');

  expect(input.getAttribute('value')).toBe('2');

  const decrement = getByTestId('counter-decrement');
  fireEvent.click(decrement);

  expect(input.getAttribute('value')).toBe('1');
});
