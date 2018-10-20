import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { BaseStyles } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BaseStyles.COLOR_WHITE,
  },
});

const AlbumPhotosPage = ({ navigation: { navigate } }) => (
  <SafeAreaView style={[styles.container]}>
    <Text onPress={() => navigate('PhotoDetails')}>AlbumPhotosPage</Text>
  </SafeAreaView>
);

AlbumPhotosPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default AlbumPhotosPage;
