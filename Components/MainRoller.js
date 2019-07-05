import React, { Component } from 'react';
import { TextInput, Button, Alert, StyleSheet, View } from 'react-native';
import {colors, fonts, padding, dimensions} from '../Styles/base';

export default class MainRoller extends Component {

    constructor() {
        super();
        this.state = { style: styles.textinput_unfocused };
    }

    onFocus() {
        this.setState({ style: styles.textinput_focused })
    }

    onBlur() {
        this.setState({ style: styles.textinput_unfocused })
    }

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }
    

    render() {
        return (
            <View style={styles.mainRollerContainer}>
                <TextInput
                    onBlur={ () => this.onBlur() }
                    onFocus={ () => this.onFocus() }
                    style={ [styles.textinput, this.state.style] } 
                />
                <Button
                    style={styles.mainRollerBtn}
                    onPress={this._onPressButton}
                    title="ROLL' EM"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainRollerContainer:{
        flexDirection: 'row',
        paddingTop: padding.xl,
        paddingBottom:padding.lg,
        paddingLeft: padding.sm,
        paddingRight: padding.sm,
        height: 125,
        width: dimensions.fullWidth
    },

    textinput_focused: {
        backgroundColor: 'red',
        color: 'white',
        fontSize: fonts.lg,
        borderWidth: 0.5,
        borderColor: 'black',
        flex:1
    },

    textinput_unfocused: {
        backgroundColor: 'green',
        color: 'white',
        fontSize: fonts.lg,
        borderWidth: 0.5,
        borderColor: 'black',
        flex:1
    },
    
    mainRollerBtn: {
        flex:1
    }
  });