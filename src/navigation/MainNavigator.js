import { createStackNavigator } from 'react-navigation';

import { AlbumPhotosPage, AlbumsPage, PhotoDetailsPage } from '../pages';

export const AppNavigator = createStackNavigator(
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
