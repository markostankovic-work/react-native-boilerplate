import { Map } from 'immutable';
import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE
} from '../actions/example';

const initialState = Map({
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
});

const actionsMap = {
  [FETCHING_DATA]: (state) => {
    return state.merge(Map({
      data: [],
      isFetching: true,
    }));
  },
  [FETCHING_DATA_FAILURE]: (state, action) => {
    return state.merge(Map({
      isFetching: false,
      error: action.error.message,
    }));
  },
  [FETCHING_DATA_SUCCESS]: (state, action) => {
    return state.merge(Map({
      data: action.data.results,
      isFetching: false,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}