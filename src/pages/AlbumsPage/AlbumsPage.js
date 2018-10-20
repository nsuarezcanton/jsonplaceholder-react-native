import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StyleSheet } from 'react-native';
import { AlbumListComponent } from '../../components';

import { BaseStyles } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BaseStyles.COLOR_WHITE,
  },
});

const AlbumsPage = ({ navigation: { navigate } }) => (
  <SafeAreaView style={[styles.container]}>
    <AlbumListComponent onTapItem={() => navigate('AlbumPhotos')} />
  </SafeAreaView>
);

AlbumsPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default AlbumsPage;
