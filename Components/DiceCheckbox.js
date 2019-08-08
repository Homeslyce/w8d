import React, { Component } from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { colors, fonts } from '../Styles/base';
import { Checkbox } from 'react-native-paper';

export default class DiceCheckbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    CbPress() {
        this.setState({ checked: !this.state.checked }); //reverse the checked state everytime the cb is clicked
        this.props.onPress(!this.state.checked); //When sending the state to the parent component, reverse the state to represent the current state and not the previous state
    }

    render() {
        return(
            <View style = {styles.container}>
                <Image 
                    source={this.props.pic}
                    style={styles.image}
                />
                <Text style= {styles.text}>{this.props.qtyDice}</Text>
                <Checkbox
                    status={this.state.checked ? 'checked' : 'unchecked'}
                    onPress={this.CbPress.bind(this)}
                    color= {colors.primary}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center'
    },

    image: {
        height: 60,
        width: 60,
    },

    text : {
        fontSize: fonts.md
    }
  });