import React, { Component } from 'react';
import { Image, View, StyleSheet} from 'react-native';
import {colors, fonts, padding, dimensions} from '../Styles/base';
import { Checkbox } from 'react-native-paper';

export default class DiceCheckbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    render() {
        const { checked } = this.state;
        return(
            <View style = {styles.container}>
                <Image 
                    source={this.props.pic}
                    style={styles.image}
                />
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: !checked }); }}
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
        height: 75,
        width: 75,
    }
  });