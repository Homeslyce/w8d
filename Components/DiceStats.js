import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import {colors, fonts, padding, dimensions} from '../Styles/base';

export default class DiceResult extends Component {
    render() {
        return(
            <Text style={styles.diceStats}>
                This is the Dice stats component
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    diceStats: {
      color: colors.primary,
      fontSize: fonts.md,
      width: dimensions.fullWidth},
  });