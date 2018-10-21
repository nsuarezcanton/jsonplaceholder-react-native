import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import AlbumListCell from './AlbumListCell';
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

const AlbumList = ({ albumList, onTapItem, onScroll, refreshControl }) => (
  <FlatList
    refreshControl={refreshControl}
    contentContainerStyle={[styles.contentContainer]}
    data={albumList}
    onScroll={onScroll}
    scrollEventThrottle={16}
    ItemSeparatorComponent={() => <View style={[styles.separator]} />}
    keyExtractor={cellData => String(cellData.id)}
    renderItem={cellData => <AlbumListCell {...cellData} onTap={onTapItem} />}
  />
);

AlbumList.propTypes = {
  albumList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  onTapItem: PropTypes.func.isRequired,
  onScroll: PropTypes.func,
  refreshControl: PropTypes.node,
};

AlbumList.defaultProps = {
  onScroll: null,
  refreshControl: null,
};

export default AlbumList;
