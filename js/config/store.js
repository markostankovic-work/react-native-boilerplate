import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';
import rootReducer from '../reducers';

// Creating store
export default () => {
  const sagaMiddleware = createSagaMiddleware();

  // Create store
  // with initial state if it exists
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );

  // Run root saga
  sagaMiddleware.run(rootSaga);

  // Return store only
  // But as an object for consistency
  return {
    store,
  };
};
