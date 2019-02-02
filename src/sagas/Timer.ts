import {
  put,
  takeLatest,
  call,
  take,
  cancel,
  cancelled
} from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import * as constants from '../constants/Timer';
import * as actions from '../actions/Timer';
import * as counterConstants from '../constants/Counter';

export function* timerActionWatcher() {
  const task = yield takeLatest(constants.START_COUNTDOWN, startCountdown);

  yield take(counterConstants.CANCELL_COUNTER);

  yield cancel(task);
}

function countdown(secs: number) {
  secs++;
  return eventChannel(emitter => {
    const iv = setInterval(() => {
      secs -= 1;
      if (secs > 0) {
        emitter(secs);
      } else {
        // this causes the channel to close
        emitter(END);
      }
    }, 1000);
    // The subscriber must return an unsubscribe function
    return () => {
      clearInterval(iv);
    };
  });
}

export function* startCountdown(action: actions.StartCountdown) {
  const chan = yield call(countdown, action.payload);
  try {
    while (true) {
      // take(END) will cause the saga to terminate by jumping to the finally block
      let seconds = yield take(chan);
      yield put({ type: constants.DECREMENT_COUNTDOWN });
    }
  } finally {
    if (yield cancelled()) {
      chan.close();
      yield put({ type: counterConstants.CANCELL_COUNTER });
    } else {
      yield put({ type: counterConstants.EXPIRE_COUNTER });
    }
  }
}
