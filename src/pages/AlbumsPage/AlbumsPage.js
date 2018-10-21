import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StyleSheet, Animated } from 'react-native';
import { isEmpty } from 'lodash';

import { AlbumList, NavigationBar } from '../../components';
import { BaseStyles } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BaseStyles.COLOR_WHITE,
  },
});

class AlbumsPage extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  componentDidMount() {
    const { loadAlbums, loadPhotos } = this.props;
    loadAlbums();
    loadPhotos();
  }
  render() {
    const {
      navigation: { navigate },
      albumWithPhotos,
      loading,
    } = this.props;
    const { scrollY } = this.state;
    return (
      <SafeAreaView style={[styles.container]}>
        <NavigationBar title="Welcome!" scrollY={scrollY} />
        {!isEmpty(albumWithPhotos) &&
          !loading && (
            <AlbumList
              onScroll={Animated.event([
                {
                  nativeEvent: {
                    contentOffset: { y: this.state.scrollY },
                  },
                },
              ])}
              onTapItem={albumId => navigate('AlbumPhotos', { albumId })}
              albumList={albumWithPhotos}
            />
          )}
      </SafeAreaView>
    );
  }
}

AlbumsPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  loadAlbums: PropTypes.func.isRequired,
  loadPhotos: PropTypes.func.isRequired,
  albumWithPhotos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      photos: PropTypes.arrayOf(
        PropTypes.shape({
          albumId: PropTypes.number.isRequired,
          id: PropTypes.number.isRequired,
          thumbnailUrl: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default AlbumsPage;
