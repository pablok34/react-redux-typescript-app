import { Reducer } from 'redux';
import { StoreCounterState, CounterStatus } from '../types';
import { CounterAction } from '../actions/Counter';
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  FETCH_MAXIMUM,
  FETCH_MAXIMUM_SUCCESS,
  FETCH_MAXIMUM_FAILURE,
  EXPIRE_COUNTER,
  CANCELL_COUNTER,
  COMPLETE_COUNTER
} from '../constants/Counter';

const initialState: StoreCounterState = {
  counterValue: 0,
  maxValue: 4,
  counterStatus: CounterStatus.Initial
};

const reducer: Reducer<StoreCounterState> = (
  state = initialState,
  action: CounterAction
): StoreCounterState => {
  switch (action.type) {
    case FETCH_MAXIMUM:
      return { ...state, counterStatus: CounterStatus.Loading };
    case FETCH_MAXIMUM_SUCCESS:
      return {
        ...state,
        counterStatus: CounterStatus.Active,
        maxValue: action.payload
      };
    case FETCH_MAXIMUM_FAILURE:
      return { ...state, counterStatus: CounterStatus.Error };
    case INCREMENT_COUNTER:
      return { ...state, counterValue: state.counterValue + 1 };
    case DECREMENT_COUNTER:
      return { ...state, counterValue: state.counterValue - 1 };
    case COMPLETE_COUNTER:
      return { ...state, counterStatus: CounterStatus.Completed };
    case EXPIRE_COUNTER:
      return { ...state, counterStatus: CounterStatus.Expired };
    case CANCELL_COUNTER:
      return { ...state, counterStatus: CounterStatus.Cancelled };
    default:
      return state;
  }
};

export { reducer as counterReducer };
