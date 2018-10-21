# Redux Store

### Actions

- `loadAlbums()`: actions to populate the store with `Album` data.
- `loadPhotos()`: actions to populate the store with `Photos` data.

### Reducers

- albumsReducer
- photosReducer

### Selectors

- Store:
  - `getAlbumsWithPhotos(state)`
- Albums:
  - `getAlbumTitle(state, albumId)`
- Photos:
  - `getPhotosByAlbum(state, albumId)`
  - `getPhotoById(state, photoId)`
