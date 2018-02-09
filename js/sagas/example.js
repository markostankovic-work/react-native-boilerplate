import { takeLatest, call, put } from 'redux-saga/effects';

import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE
} from '../actions/example';
import api from '../api';

function createGetExample() {
  return function* () { // eslint-disable-line consistent-return
    try {
      const data = yield call(() => api.getPeople());

      const action = { type: FETCHING_DATA_SUCCESS, data };

      yield put(action);
    } catch (error) {
      const action = { type: FETCHING_DATA_FAILURE, error };

      yield put(action);
    }
  };
}

export const getUsers = createGetExample();

export function* getExampleWatcher() {
  yield takeLatest(FETCHING_DATA, getUsers);
}


export default [
  getExampleWatcher(),
];