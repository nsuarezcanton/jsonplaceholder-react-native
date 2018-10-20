import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

import { NavigationBar } from '../../components';
import { BaseStyles } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BaseStyles.COLOR_WHITE,
  },
});

const PhotoDetailsPage = ({ navigation: { goBack } }) => (
  <SafeAreaView style={[styles.container]}>
    <NavigationBar onTap={() => goBack()} />
    <Text onPress={() => goBack()}>PhotoDetailsPage</Text>
  </SafeAreaView>
);

PhotoDetailsPage.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default PhotoDetailsPage;
