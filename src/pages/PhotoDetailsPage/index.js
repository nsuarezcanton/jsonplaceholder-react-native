import { connect } from 'react-redux';
import PhotoDetailsPage from './PhotoDetailsPage';
import { getPhotoById } from '../../store/reducers/photosReducer';

const mapStateToProps = (
  state,
  {
    navigation: {
      state: {
        params: { photoId },
      },
    },
  },
) => ({
  photo: getPhotoById(state, photoId),
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhotoDetailsPage);
