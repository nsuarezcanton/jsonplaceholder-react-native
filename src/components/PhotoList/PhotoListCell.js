import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/EvilIcons';
import { BaseStyles, TextStyles } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photoContainer: {
    flex: 1,
    paddingRight: BaseStyles.SPACING_BASE,
  },
  photo: {
    flex: 1,
    height: 272,
    width: undefined,
  },
  label: {
    fontSize: TextStyles.SIZE_MEDIUM,
    fontFamily: TextStyles.FAMILY_PRIMARY_REGULAR,
    marginTop: BaseStyles.SPACING_TINY,
  },
});

const PhotoListCell = ({ item: { id, title, url }, onTap }) => (
  <TouchableOpacity onPress={() => onTap(id)}>
    <View style={[styles.container]}>
      <View style={[styles.photoContainer]}>
        <Image style={[styles.photo]} source={{ uri: url }} resizeMode="cover" />
      </View>
      <Icon name="chevron-right" size={BaseStyles.SPACING_LARGE} color={BaseStyles.COLOR_BLACK} />
    </View>
    <Text style={[styles.label]}>{title}</Text>
  </TouchableOpacity>
);

PhotoListCell.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  onTap: PropTypes.func.isRequired,
};

export default PhotoListCell;
