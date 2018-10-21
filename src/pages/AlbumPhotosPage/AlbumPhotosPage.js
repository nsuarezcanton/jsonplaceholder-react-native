import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StyleSheet } from 'react-native';

import { PhotoList, NavigationBar } from '../../components';
import { BaseStyles } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BaseStyles.COLOR_WHITE,
  },
});

const AlbumPhotosPage = ({ navigation: { navigate, goBack }, photosByAlbum, albumTitle }) => (
  <SafeAreaView style={[styles.container]}>
    <NavigationBar title={albumTitle} onTap={() => goBack()} />
    <PhotoList
      onTapItem={photoId => navigate('PhotoDetails', { photoId })}
      photoList={photosByAlbum}
    />
  </SafeAreaView>
);

AlbumPhotosPage.propTypes = {
  albumTitle: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  photosByAlbum: PropTypes.arrayOf(
    PropTypes.shape({
      albumId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default AlbumPhotosPage;
