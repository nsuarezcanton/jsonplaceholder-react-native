import { createAction, createActions } from 'redux-actions';

export const LOAD_PHOTOS_REQUEST = 'photosActions/LOAD_PHOTOS_REQUEST';
export const LOAD_PHOTOS_SUCCESS = 'photosActions/LOAD_PHOTOS_SUCCESS';
export const LOAD_PHOTOS_FAILURE = 'photosActions/LOAD_PHOTOS_FAILURE';

export const loadPhotosRequest = createAction(LOAD_PHOTOS_REQUEST);
export const loadPhotosSuccess = createAction(LOAD_PHOTOS_SUCCESS, null);
export const loadPhotosFailure = createAction(LOAD_PHOTOS_FAILURE, null);

const { loadPhotos } = createActions({
  LOAD_PHOTOS: async (dispatch, getState, services) => {
    dispatch(loadPhotosRequest());
    try {
      const albums = await services.PhotosService.getPhotos();
      dispatch(loadPhotosSuccess(albums));
    } catch (error) {
      dispatch(loadPhotosFailure(error));
    }
  },
});
export default { loadPhotos };
