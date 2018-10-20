import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

import { BaseStyles } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BaseStyles.COLOR_WHITE,
  },
});

const AlbumsPage = ({ navigation: { navigate } }) => (
  <SafeAreaView style={[styles.container]}>
    <Text onPress={() => navigate('AlbumPhotos')}>AlbumsPage</Text>
  </SafeAreaView>
);

AlbumsPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default AlbumsPage;
