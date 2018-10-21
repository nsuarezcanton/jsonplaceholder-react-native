import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import PhotoListCell from './PhotoListCell';
import { BaseStyles } from '../../styles';

const styles = StyleSheet.create({
  contentContainer: { padding: BaseStyles.SPACING_BASE },
  separator: {
    backgroundColor: BaseStyles.COLOR_BLACK,
    flex: 1,
    height: 1,
    marginTop: BaseStyles.SPACING_TINY,
    marginBottom: BaseStyles.SPACING_BASE,
  },
});

const PhotoList = ({ photoList, onTapItem }) => (
  <FlatList
    contentContainerStyle={[styles.contentContainer]}
    data={photoList}
    ItemSeparatorComponent={() => <View style={[styles.separator]} />}
    keyExtractor={cellData => String(cellData.id)}
    renderItem={cellData => <PhotoListCell {...cellData} onTap={onTapItem} />}
  />
);

PhotoList.propTypes = {
  photoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  onTapItem: PropTypes.func.isRequired,
};

export default PhotoList;
