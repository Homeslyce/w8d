import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {colors, fonts, padding, dimensions} from '../Styles/base';

export default class DiceResult extends Component {
    constructor(props) {
    super(props);
    this.state = {  onePlus : 0,
                    twoPlus: 0,
                    threePlus: 0,
                    fourPlus: 0,
                    fivePlus: 0,
                    sixPlus: 0};
}

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.listItem}>1+: {this.state.onePlus}</Text>
                <Text style={styles.listItem}>2+: {this.state.twoPlus}</Text>
                <Text style={styles.listItem}>3+: {this.state.threePlus}</Text>
                <Text style={styles.listItem}>4+: {this.state.fourPlus}</Text>
                <Text style={styles.listItem}>5+: {this.state.fivePlus}</Text>
                <Text style={styles.listItem}>6+: {this.state.sixPlus}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      width: dimensions.fullWidth},
    
    listItem: {
        color: colors.primary,
        fontSize: fonts.md,
        paddingLeft: padding.md
    }
  });