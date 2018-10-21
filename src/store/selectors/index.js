import _ from 'lodash';

// Combined
export const getAlbumsWithPhotos = ({ albumsReducer, photosReducer }) =>
  _.map(albumsReducer.data, album => {
    const photosByAlbum = _.groupBy(photosReducer.data, 'albumId');
    return { ...album, photos: photosByAlbum[album.id] };
  });

// Albums Reducer
export const getAlbumTitle = ({ albumsReducer }, albumId) =>
  _.find(albumsReducer.data, album => album.id === albumId).title;

// Photos Reducer
export const getPhotosByAlbum = ({ photosReducer }, selectedAlbumId) =>
  _.groupBy(photosReducer.data, 'albumId')[selectedAlbumId];

export const getPhotoById = ({ photosReducer }, selectedPhotoId) =>
  _.find(photosReducer.data, photo => photo.id === selectedPhotoId);
