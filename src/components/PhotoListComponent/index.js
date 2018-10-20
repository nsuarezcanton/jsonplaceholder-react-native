import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import PhotoListCellComponent from './PhotoListCellComponent';
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

const PhotoListComponent = ({ photoList = TEST_DATA, onTapItem }) => (
  <FlatList
    contentContainerStyle={[{ paddingHorizontal: BaseStyles.SPACING_BASE }]}
    data={photoList}
    ItemSeparatorComponent={() => (
      <View
        style={{
          backgroundColor: '#000000',
          flex: 1,
          height: 1,
          marginTop: 8,
          marginBottom: 24,
        }}
      />
    )}
    keyExtractor={cellData => String(cellData.id)}
    renderItem={cellData => <PhotoListCellComponent {...cellData} onTap={onTapItem} />}
  />
);

PhotoListComponent.propTypes = {
  photoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  onTapItem: PropTypes.func.isRequired,
};

export default PhotoListComponent;
