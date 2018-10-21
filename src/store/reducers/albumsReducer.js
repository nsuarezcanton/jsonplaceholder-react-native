import { handleActions } from 'redux-actions';
import _ from 'lodash';
import {
  LOAD_ALBUMS_REQUEST,
  LOAD_ALBUMS_SUCCESS,
  LOAD_ALBUMS_FAILURE,
} from '../actions/albumsActions';

export const initialState = {
  loading: false,
  error: false,
  data: null,
};

export default handleActions(
  {
    [LOAD_ALBUMS_REQUEST]: state => ({
      ...state,
      loading: true,
    }),
    [LOAD_ALBUMS_SUCCESS]: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload,
    }),
    [LOAD_ALBUMS_FAILURE]: (state, action) => ({
      ...state,
      loading: false,
      error: true,
      data: action.payload,
    }),
  },
  initialState,
);

export const getAlbumsWithPhotos = ({ albumsReducer, photosReducer }) =>
  _.map(albumsReducer.data, album => {
    const photosByAlbum = _.groupBy(photosReducer.data, 'albumId');
    return { ...album, photos: photosByAlbum[album.id] };
  });

export const getAlbumTitle = ({ albumsReducer }, albumId) =>
  _.find(albumsReducer.data, album => album.id === albumId).title;
