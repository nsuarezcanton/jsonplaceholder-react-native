import { handleActions } from 'redux-actions';

import {
  LOAD_PHOTOS_REQUEST,
  LOAD_PHOTOS_SUCCESS,
  LOAD_PHOTOS_FAILURE,
} from '../actions/photosActions';

export const initialState = {
  loading: false,
  error: false,
  data: null,
};

export default handleActions(
  {
    [LOAD_PHOTOS_REQUEST]: state => ({
      ...state,
      loading: true,
    }),
    [LOAD_PHOTOS_SUCCESS]: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload,
    }),
    [LOAD_PHOTOS_FAILURE]: (state, action) => ({
      ...state,
      loading: false,
      error: true,
      data: action.payload,
    }),
  },
  initialState,
);
