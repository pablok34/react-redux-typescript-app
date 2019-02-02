import { Store, createStore, Middleware, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StoreState } from '../types';
import { rootReducer } from '../reducers/';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

export const logger: Middleware = store => next => action => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(action);
  }
  return next(action);
};

export function configureStore(initialState?: StoreState): Store<StoreState> {
  const sagaMiddleware = createSagaMiddleware();

  let middleware = applyMiddleware(logger);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  let prodMiddleware = applyMiddleware(sagaMiddleware);

  const store = createStore(
    rootReducer,
    initialState as StoreState,
    prodMiddleware
  ) as Store<StoreState>;
  sagaMiddleware.run(rootSaga);

  return store;
}
