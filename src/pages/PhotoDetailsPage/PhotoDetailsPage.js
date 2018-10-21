import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, Text, StyleSheet, View, Image } from 'react-native';

import { NavigationBar } from '../../components';
import { BaseStyles, TextStyles } from '../../styles';
import screenDimensions from '../../themes/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BaseStyles.COLOR_WHITE,
  },
  content: {
    padding: BaseStyles.SPACING_BASE,
  },
  photo: {
    height: screenDimensions.screenWidth - 2 * BaseStyles.SPACING_BASE,
    marginBottom: BaseStyles.SPACING_BASE,
  },
  label: {
    fontSize: TextStyles.SIZE_LARGE,
    fontFamily: TextStyles.FAMILY_PRIMARY_BOLD,
  },
});

const PhotoDetailsPage = ({ navigation: { goBack }, photo: { title, url } }) => (
  <SafeAreaView style={[styles.container]}>
    <NavigationBar onTap={() => goBack()} />
    <View style={[styles.content]}>
      <Image style={[styles.photo]} source={{ uri: url }} resizeMode="cover" />
      <Text style={[styles.label]}>{title}</Text>
    </View>
  </SafeAreaView>
);

PhotoDetailsPage.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  photo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default PhotoDetailsPage;
