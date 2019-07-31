import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {colors, fonts, padding, dimensions, margin} from '../Styles/base';
import DiceCheckbox from './DiceCheckbox';
import imgD1 from '../assets/d1.png'
import imgD2 from '../assets/d2.png'
import imgD3 from '../assets/d3.png'
import imgD4 from '../assets/d4.png'
import imgD5 from '../assets/d5.png'
import imgD6 from '../assets/d6.png'

export default class DiceResult extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <DiceCheckbox pic={imgD1} qtyDice={this.props.d1Result}/>
                    <DiceCheckbox pic={imgD2} qtyDice={this.props.d2Result}/>
                    <DiceCheckbox pic={imgD3} qtyDice={this.props.d3Result}/>
                </View>
                <View style={styles.subContainer}>
                    <DiceCheckbox pic={imgD4} qtyDice={this.props.d4Result}/>
                    <DiceCheckbox pic={imgD5} qtyDice={this.props.d5Result}/>
                    <DiceCheckbox pic={imgD6} qtyDice={this.props.d6Result}/>
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