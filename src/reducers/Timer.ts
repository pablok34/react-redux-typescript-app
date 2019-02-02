import { Reducer } from 'redux';
import { StoreTimerState } from '../types';
import { TimerAction } from '../actions/Timer';
import {
  COUNTDOWN_TERMINATED,
  START_COUNTDOWN,
  DECREMENT_COUNTDOWN
} from '../constants/Timer';

const initialState: StoreTimerState = {
  pendingTime: 60
};

const reducer: Reducer<StoreTimerState> = (
  state = initialState,
  action: TimerAction
): StoreTimerState => {
  switch (action.type) {
    case DECREMENT_COUNTDOWN:
      return { ...state, pendingTime: state.pendingTime - 1 };
    case COUNTDOWN_TERMINATED:
      return { ...state };
    case START_COUNTDOWN:
      return { ...state, pendingTime: action.payload };
    default:
      return state;
  }
};

export { reducer as timerReducer };
