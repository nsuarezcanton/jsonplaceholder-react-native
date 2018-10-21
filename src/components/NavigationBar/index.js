import React from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/EvilIcons';

import { BaseStyles, TextStyles } from '../../styles';

const styles = StyleSheet.create({
  container: {
    marginTop: BaseStyles.SPACING_TINY,
    paddingHorizontal: BaseStyles.SPACING_SMALL,
  },
  label: {
    color: BaseStyles.COLOR_BLACK,
    fontSize: TextStyles.SIZE_LARGE,
    fontFamily: TextStyles.FAMILY_PRIMARY_BOLD,
    textAlign: 'right',
    marginBottom: BaseStyles.SPACING_TINY,
  },
  separator: {
    backgroundColor: BaseStyles.COLOR_BLACK,
    height: 2,
  },
});

class NavigationBar extends React.Component {
  constructor() {
    super();
    this.state = { titleHeight: undefined };
  }

  getTitleHeight() {
    const titleHeight = this.props.scrollY.interpolate({
      inputRange: [0, 400],
      outputRange: [this.state.titleHeight, 0],
      extrapolate: 'clamp',
    });
    return titleHeight;
  }

  getTitleOpacity() {
    const titleOpacity = this.props.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return titleOpacity;
  }

  render() {
    const { onTap, title, scrollY } = this.props;
    return (
      <View style={[styles.container]}>
        <View
          style={[
            {
              height: BaseStyles.SPACING_LARGE,
              width: BaseStyles.SPACING_XLARGE,
            },
          ]}
        >
          {onTap && (
            <TouchableOpacity onPress={() => onTap()}>
              <Icon
                name="arrow-left"
                size={BaseStyles.SPACING_LARGE}
                color={BaseStyles.COLOR_BLACK}
              />
            </TouchableOpacity>
          )}
        </View>

        {title && (
          <Animated.Text
            onLayout={event => {
              const { height } = event.nativeEvent.layout;
              const { titleHeight } = this.state;
              if (!titleHeight || height > this.state.titleHeight) {
                this.setState({ titleHeight: height });
              }
            }}
            style={[
              styles.label,
              {
                height: scrollY && this.getTitleHeight(),
                opacity: scrollY && this.getTitleOpacity(),
              },
            ]}
          >
            {title}
          </Animated.Text>
        )}
        <View style={[styles.separator]} />
      </View>
    );
  }
}

NavigationBar.propTypes = {
  onTap: PropTypes.func,
  title: PropTypes.string,
  scrollY: PropTypes.shape({
    interpolate: PropTypes.func.isRequired,
  }),
};

NavigationBar.defaultProps = {
  scrollY: null,
};

export default NavigationBar;
