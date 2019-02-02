import * as constants from '../constants/Counter';

export interface IncrementCounter {
  type: constants.INCREMENT_COUNTER;
}

export interface DecrementCounter {
  type: constants.DECREMENT_COUNTER;
}

export interface FetchMaximum {
  type: constants.FETCH_MAXIMUM;
}

export interface FetchMaximumRecived {
  type: constants.FETCH_MAXIMUM_SUCCESS;
  payload: number;
}

export interface FetchMaximumFailure {
  type: constants.FETCH_MAXIMUM_FAILURE;
}

export interface ExpireCounter {
  type: constants.EXPIRE_COUNTER;
}

export interface CancellCounter {
  type: constants.CANCELL_COUNTER;
}

export interface CompleteCounter {
  type: constants.COMPLETE_COUNTER;
}

export type CounterAction =
  | IncrementCounter
  | DecrementCounter
  | FetchMaximum
  | FetchMaximumRecived
  | FetchMaximumFailure
  | ExpireCounter
  | CancellCounter
  | CompleteCounter;

export function incrementCounter(): IncrementCounter {
  return {
    type: constants.INCREMENT_COUNTER
  };
}

export function decrementCounter(): DecrementCounter {
  return {
    type: constants.DECREMENT_COUNTER
  };
}

export function fetchMaximum(): FetchMaximum {
  return {
    type: constants.FETCH_MAXIMUM
  };
}

export function fetchMaximumRecived(payload: number): FetchMaximumRecived {
  return {
    type: constants.FETCH_MAXIMUM_SUCCESS,
    payload
  };
}

export function fetchMaximumFailure(): FetchMaximumFailure {
  return {
    type: constants.FETCH_MAXIMUM_FAILURE
  };
}

export function expireCounter(): ExpireCounter {
  return {
    type: constants.EXPIRE_COUNTER
  };
}

export function cancellCounter(): CancellCounter {
  return {
    type: constants.CANCELL_COUNTER
  };
}

export function completeCounter(): CompleteCounter {
  return {
    type: constants.COMPLETE_COUNTER
  };
}
