import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StyleSheet } from 'react-native';
import { AlbumList, NavigationBar } from '../../components';

import { BaseStyles } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BaseStyles.COLOR_WHITE,
  },
});

class AlbumsPage extends React.Component {
  componentDidMount() {
    const { loadAlbums, loadPhotos } = this.props;
    loadAlbums();
    loadPhotos();
  }
  render() {
    const {
      navigation: { navigate },
      albumWithPhotos,
    } = this.props;
    return (
      <SafeAreaView style={[styles.container]}>
        <NavigationBar title="Welcome!" />
        <AlbumList
          onTapItem={albumId => navigate('AlbumPhotos', { albumId })}
          albumList={albumWithPhotos}
        />
      </SafeAreaView>
    );
  }
}

AlbumsPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  loadAlbums: PropTypes.func.isRequired,
  loadPhotos: PropTypes.func.isRequired,
  albumWithPhotos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      photos: PropTypes.arrayOf(
        PropTypes.shape({
          albumId: PropTypes.number.isRequired,
          id: PropTypes.number.isRequired,
          thumbnailUrl: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }),
  ).isRequired,
};

export default AlbumsPage;
