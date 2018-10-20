import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StyleSheet } from 'react-native';

import { PhotoListComponent } from '../../components';
import { BaseStyles } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BaseStyles.COLOR_WHITE,
  },
});

const AlbumPhotosPage = ({ navigation: { navigate } }) => (
  <SafeAreaView style={[styles.container]}>
    <PhotoListComponent onTapItem={() => navigate('PhotoDetails')} />
  </SafeAreaView>
);

AlbumPhotosPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default AlbumPhotosPage;
