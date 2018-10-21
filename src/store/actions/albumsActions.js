import { createAction, createActions } from 'redux-actions';

export const LOAD_ALBUMS_REQUEST = 'albumsActions/LOAD_ALBUMS_REQUEST';
export const LOAD_ALBUMS_SUCCESS = 'albumsActions/LOAD_ALBUMS_SUCCESS';
export const LOAD_ALBUMS_FAILURE = 'albumsActions/LOAD_ALBUMS_FAILURE';

export const loadAlbumsRequest = createAction(LOAD_ALBUMS_REQUEST);
export const loadAlbumsSuccess = createAction(LOAD_ALBUMS_SUCCESS, null);
export const loadAlbumsFailure = createAction(LOAD_ALBUMS_FAILURE, null);

const { loadAlbums } = createActions({
  LOAD_ALBUMS: async (dispatch, state, Services) => {
    dispatch(loadAlbumsRequest());
    try {
      const albums = await Services.AlbumsService.getAlbums();
      dispatch(loadAlbumsSuccess(albums));
    } catch (error) {
      dispatch(loadAlbumsFailure(error));
    }
  },
});
export default { loadAlbums };
