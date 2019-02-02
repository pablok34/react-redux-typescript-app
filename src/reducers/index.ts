import { combineReducers } from 'redux';
import { StoreState } from '../types';
import { counterReducer } from '../reducers/Counter';
import { timerReducer } from '../reducers/Timer';

export const rootReducer = combineReducers<StoreState>({
  counterState: counterReducer as any,
  timerState: timerReducer as any
});
