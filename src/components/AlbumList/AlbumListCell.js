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
  photosContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: BaseStyles.SPACING_BASE,
  },
  photo: { width: 128, height: 128 },
  label: {
    color: BaseStyles.COLOR_BLACK,
    fontSize: TextStyles.SIZE_MEDIUM,
    fontFamily: TextStyles.FAMILY_PRIMARY_REGULAR,
    marginTop: BaseStyles.SPACING_TINY,
  },
});

const AlbumListCell = ({ item: { id, title, photos }, onTap }) => (
  <TouchableOpacity onPress={() => onTap(id)}>
    <View style={[styles.container]}>
      <View style={[styles.photosContainer]}>
        <Image style={[styles.photo]} source={{ uri: photos[0].thumbnailUrl }} />
        <Image
          style={[styles.photo]}
          source={{
            uri: photos[1].thumbnailUrl,
          }}
        />
      </View>
      <Icon name="chevron-right" size={BaseStyles.SPACING_LARGE} color={BaseStyles.COLOR_BLACK} />
    </View>
    <Text style={[styles.label]}>{title}</Text>
  </TouchableOpacity>
);

AlbumListCell.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  onTap: PropTypes.func.isRequired,
};

export default AlbumListCell;
