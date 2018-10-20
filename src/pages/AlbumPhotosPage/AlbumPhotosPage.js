import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StyleSheet } from 'react-native';

import { PhotoListComponent, NavigationBar } from '../../components';
import { BaseStyles } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BaseStyles.COLOR_WHITE,
  },
});

const AlbumPhotosPage = ({ navigation: { navigate, goBack } }) => (
  <SafeAreaView style={[styles.container]}>
    <NavigationBar title="quidem molestiae enim" onTap={() => goBack()} />
    <PhotoListComponent onTapItem={() => navigate('PhotoDetails')} />
  </SafeAreaView>
);

AlbumPhotosPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default AlbumPhotosPage;
