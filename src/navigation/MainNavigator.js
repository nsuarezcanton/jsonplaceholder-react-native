import { StackNavigator } from 'react-navigation';

import { AlbumPhotosPage, AlbumsPage, PhotoDetailsPage } from '../pages';

export const AppNavigator = StackNavigator(
  {
    Albums: AlbumsPage,
    AlbumPhotos: AlbumPhotosPage,
    PhotoDetails: PhotoDetailsPage,
  },
  {
    headerMode: 'none',
  },
);

export default AppNavigator;
