import { connect } from 'react-redux';

import AlbumsPage from './AlbumsPage';
import albumsActions from '../../store/actions/albumsActions';
import photosActions from '../../store/actions/photosActions';
import { getAlbumsWithPhotos } from '../../store/reducers/albumsReducer';

const mapStateToProps = state => ({
  albumWithPhotos: getAlbumsWithPhotos(state),
  loading: state.albumsReducer.loading || state.photosReducer.loading,
  rehydrated: state._persist.rehydrated,
});

const mapDispatchToProps = dispatch => ({
  loadAlbums: () => dispatch(albumsActions.loadAlbums),
  loadPhotos: () => dispatch(photosActions.loadPhotos),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumsPage);
