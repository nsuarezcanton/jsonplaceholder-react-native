import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/EvilIcons';

import { BaseStyles, TextStyles } from '../../styles';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: BaseStyles.SPACING_BASE,
  },
  label: {
    color: BaseStyles.COLOR_BLACK,
    fontSize: TextStyles.SIZE_LARGE,
    fontFamily: TextStyles.FAMILY_PRIMARY_BOLD,
    textAlign: 'right',
    height: BaseStyles.SPACING_BASE,
    marginBottom: BaseStyles.SPACING_TINY,
  },
  separator: {
    backgroundColor: BaseStyles.COLOR_BLACK,
    height: 2,
  },
});

const NavigationBar = ({ onTap, title }) => (
  <View style={[styles.container]}>
    <TouchableOpacity
      onPress={() => {
        if (onTap) {
          onTap();
        }
      }}
    >
      <View style={[{ height: BaseStyles.SPACING_LARGE }]}>
        {onTap && (
          <Icon name="arrow-left" size={BaseStyles.SPACING_LARGE} color={BaseStyles.COLOR_BLACK} />
        )}
      </View>
    </TouchableOpacity>
    {title && <Text style={[styles.label]}>{title}</Text>}
    <View style={[styles.separator]} />
  </View>
);

NavigationBar.propTypes = {
  onTap: PropTypes.func,
  title: PropTypes.string,
};

export default NavigationBar;
