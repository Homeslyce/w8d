import React, { Component } from 'react';
import { TextInput, TouchableOpacity, Text, Alert, StyleSheet, View } from 'react-native';
import {colors, fonts, padding, dimensions, margin} from '../Styles/base';

export default class MainRoller extends Component {

    constructor(props) { //even if we don't use props, it is recommended to always put it for futur uses
        super(props); //call the constructor of its parent class, and puts values in this.props
        this.state = { style: styles.textinput_unfocused }; //set initial state
    }

    _onPressButton() {
        Alert.alert('You tapped the button!');
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    onFocus={ () => this.setState({ style: styles.textinput_focused }) }
                    onBlur={ () => this.setState({ style: styles.textinput_unfocused }) } //onBlur is called when ScrollView keyboard.dismiss() is called
                    underlineColorAndroid="transparent"
                    style={ [styles.textinput, this.state.style] } 
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={this._onPressButton}
                >
                    <Text>ROLL'EM</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        paddingTop: padding.xl,
        paddingBottom:padding.lg,
        paddingLeft: padding.sm,
        paddingRight: padding.sm,
        height: 115,
        width: dimensions.fullWidth
    },

    textinput_focused: {
        backgroundColor:'white',
        fontSize: fonts.lg,
        paddingHorizontal:padding.sm,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        width: dimensions.fullWidth / 2
    },

    textinput_unfocused: {
        backgroundColor:'white',
        fontSize: fonts.lg,
        paddingHorizontal:padding.sm,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        width: dimensions.fullWidth / 2
    },
    
    btn: {
        backgroundColor:'white',
        fontSize: fonts.lg,
        paddingHorizontal:padding.sm,
        marginLeft: margin.sm,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
    }
  });