import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import AlbumListCell from './AlbumListCell';
import { BaseStyles } from '../../styles';

const TEST_DATA = [
  {
    userId: 1,
    id: 1,
    title: 'quidem molestiae enim',
  },
  {
    userId: 1,
    id: 2,
    title: 'sunt qui excepturi placeat culpa',
  },
  {
    userId: 1,
    id: 3,
    title: 'omnis laborum odio',
  },
  {
    userId: 1,
    id: 4,
    title: 'non esse culpa molestiae omnis sed optio',
  },
  {
    userId: 1,
    id: 5,
    title: 'eaque aut omnis a',
  },
  {
    userId: 1,
    id: 6,
    title: 'natus impedit quibusdam illo est',
  },
  {
    userId: 1,
    id: 7,
    title: 'quibusdam autem aliquid et et quia',
  },
  {
    userId: 1,
    id: 8,
    title: 'qui fuga est a eum',
  },
  {
    userId: 1,
    id: 9,
    title: 'saepe unde necessitatibus rem',
  },
  {
    userId: 1,
    id: 10,
    title: 'distinctio laborum qui',
  },
];

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

const AlbumList = ({ albumList = TEST_DATA, onTapItem }) => (
  <FlatList
    contentContainerStyle={[styles.contentContainer]}
    data={albumList}
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
};

export default AlbumList;
