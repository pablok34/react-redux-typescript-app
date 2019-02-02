import * as constants from '../constants/Timer';

export interface CountdownTerminated {
  type: constants.COUNTDOWN_TERMINATED;
}

export interface StartCountdown {
  type: constants.START_COUNTDOWN;
  payload: number;
}

export interface DecrementCountdown {
  type: constants.DECREMENT_COUNTDOWN;
}

export type TimerAction =
  | CountdownTerminated
  | StartCountdown
  | DecrementCountdown;

export function countdownTerminated(): CountdownTerminated {
  return {
    type: constants.COUNTDOWN_TERMINATED
  };
}

export function startCountdown(time: number): StartCountdown {
  return {
    type: constants.START_COUNTDOWN,
    payload: time
  };
}

export function decrementCountdown(): DecrementCountdown {
  return {
    type: constants.DECREMENT_COUNTDOWN
  };
}
