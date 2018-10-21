import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StyleSheet, Animated, RefreshControl } from 'react-native';
import { isEmpty } from 'lodash';

import { getLocalizedString } from '../../utils/localizedUtils';
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

  loadContent = () => {
    const { loadAlbums, loadPhotos } = this.props;
    loadAlbums();
    loadPhotos();
  };

  componentDidMount() {
    const { rehydrated, albumWithPhotos } = this.props;
    if (rehydrated && isEmpty(albumWithPhotos)) {
      this.loadContent();
    }
  }
  render() {
    const {
      navigation: { navigate },
      albumWithPhotos,
      loading,
    } = this.props;
    const { scrollY } = this.state;
    const contentReady = !isEmpty(albumWithPhotos) && !loading;
    return (
      <SafeAreaView style={[styles.container]}>
        <NavigationBar title={getLocalizedString('greeting')} scrollY={scrollY} />
        {contentReady && (
          <AlbumList
            refreshControl={
              <RefreshControl refreshing={this.state.refreshing} onRefresh={this.loadContent} />
            }
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
      id: PropTypes.number,
      title: PropTypes.string,
      photos: PropTypes.arrayOf(
        PropTypes.shape({
          albumId: PropTypes.number,
          id: PropTypes.number,
          thumbnailUrl: PropTypes.string,
          url: PropTypes.string,
        }),
      ),
    }),
  ),
  loading: PropTypes.bool.isRequired,
  rehydrated: PropTypes.bool.isRequired,
};

AlbumsPage.defaultProps = {
  albumWithPhotos: [],
};

export default AlbumsPage;
