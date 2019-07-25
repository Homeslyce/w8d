import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {colors, fonts, padding, dimensions, margin} from '../Styles/base';
import DiceCheckbox from './DiceCheckbox';

export default class DiceResult extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <DiceCheckbox pic={require('../assets/d1.png')}/>
                    <DiceCheckbox pic={require('../assets/d2.png')}/>
                    <DiceCheckbox pic={require('../assets/d3.png')}/>
                </View>
                <View style={styles.subContainer}>
                    <DiceCheckbox pic={require('../assets/d4.png')}/>
                    <DiceCheckbox pic={require('../assets/d5.png')}/>
                    <DiceCheckbox pic={require('../assets/d6.png')}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: margin.lg,
        flexDirection: 'column'
    },

    subContainer: {
        marginTop: margin.sm,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
  });