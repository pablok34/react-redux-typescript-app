import { all } from 'redux-saga/effects';
import { counterActionWatcher } from './Counter';
import { timerActionWatcher } from './Timer';

export default function* rootSaga() {
  yield all([counterActionWatcher(), timerActionWatcher()]);
}
