import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StyleSheet, Animated } from 'react-native';

import { PhotoList, NavigationBar } from '../../components';
import { BaseStyles } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BaseStyles.COLOR_WHITE,
  },
});

class AlbumPhotosPage extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  render() {
    const {
      navigation: { navigate, goBack },
      photosByAlbum,
      albumTitle,
    } = this.props;
    const { scrollY } = this.state;
    return (
      <SafeAreaView style={[styles.container]}>
        <NavigationBar title={albumTitle} onTap={() => goBack()} scrollY={scrollY} />
        <PhotoList
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: { y: this.state.scrollY },
              },
            },
          ])}
          onTapItem={photoId => navigate('PhotoDetails', { photoId })}
          photoList={photosByAlbum}
        />
      </SafeAreaView>
    );
  }
}

AlbumPhotosPage.propTypes = {
  albumTitle: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  photosByAlbum: PropTypes.arrayOf(
    PropTypes.shape({
      albumId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default AlbumPhotosPage;
