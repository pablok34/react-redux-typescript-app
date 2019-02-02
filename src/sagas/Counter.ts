import { put, takeLatest, select, call } from 'redux-saga/effects';
import { getNumber } from '../vendor/sdk';
import * as constants from '../constants/Counter';
import { StoreState } from '../types';

function* fetchMaximum() {
  try {
    const request = yield call(getNumber);
    yield put({ type: constants.FETCH_MAXIMUM_SUCCESS, payload: request });
  } catch (error) {
    yield put({ type: constants.FETCH_MAXIMUM_FAILURE });
  }
}

function maxValueSelector(state: StoreState): number {
  return state.counterState.maxValue;
}
function counterValueSelector(state: StoreState): number {
  return state.counterState.counterValue;
}
function* checkMaximumReached() {
  const maxValue = yield select(maxValueSelector);
  const counterValue = yield select(counterValueSelector);

  if (counterValue === maxValue) {
    yield put({ type: constants.COMPLETE_COUNTER });
  }
}

export function* counterActionWatcher() {
  yield takeLatest(constants.FETCH_MAXIMUM, fetchMaximum);

  yield takeLatest(constants.INCREMENT_COUNTER, checkMaximumReached);
}
