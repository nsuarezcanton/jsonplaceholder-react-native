import { connect } from 'react-redux';
import AlbumPhotosPage from './AlbumPhotosPage';
import { getPhotosByAlbum, getAlbumTitle } from '../../store/selectors';

const mapStateToProps = (
  state,
  {
    navigation: {
      state: {
        params: { albumId },
      },
    },
  },
) => ({
  photosByAlbum: getPhotosByAlbum(state, albumId),
  albumTitle: getAlbumTitle(state, albumId),
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumPhotosPage);
