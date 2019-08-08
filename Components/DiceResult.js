import React, { Component } from 'react';
import { StyleSheet, View, Alert, Keyboard } from 'react-native';
import { Button } from 'react-native-paper';
import { colors, dimensions, margin } from '../Styles/base';
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
        this.state = {
            d1Checked: false,
            d2Checked: false,
            d3Checked: false,
            d4Checked: false,
            d5Checked: false,
            d6Checked: false
        };
    }

    RerollDice() {
        var strTest = 'The following dice are checked: ';

        if (this.state.d1Checked)
            strTest += 'd1 (' + this.props.d1Result + ') ';
        
        if (this.state.d2Checked)
        strTest += 'd2 (' + this.props.d2Result + ') ';

        if (this.state.d3Checked)
        strTest += 'd3 (' + this.props.d3Result + ') ';

        if (this.state.d4Checked)
        strTest += 'd4 (' + this.props.d4Result + ') ';

        if (this.state.d5Checked)
        strTest += 'd5 (' + this.props.d5Result + ') ';

        if (this.state.d6Checked)
        strTest += 'd6 (' + this.props.d6Result + ') ';

        Alert.alert(strTest);

        Keyboard.dismiss();
    }

    //Function passed to the child element DiceCheckbox that returns the state of the checkbox
    HandleCbPress(checked, diceCategory) {
        switch (diceCategory) {
            case 'd1':
                this.setState({d1Checked: checked});
                break;
            case 'd2':
                this.setState({d2Checked: checked});
                break;
            case 'd3':
                this.setState({d3Checked: checked});
                break;
            case 'd4':
                this.setState({d4Checked: checked});
                break;
            case 'd5':
                this.setState({d5Checked: checked});
                break;
            case 'd6':
                this.setState({d6Checked: checked});
                break;  
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <DiceCheckbox pic={imgD1} qtyDice={this.props.d1Result} onPress={(checked) => this.HandleCbPress(checked, 'd1')}/>
                    <DiceCheckbox pic={imgD2} qtyDice={this.props.d2Result} onPress={(checked) => this.HandleCbPress(checked, 'd2')}/>
                    <DiceCheckbox pic={imgD3} qtyDice={this.props.d3Result} onPress={(checked) => this.HandleCbPress(checked, 'd3')}/>
                </View>
                <View style={styles.subContainer}>
                    <DiceCheckbox pic={imgD4} qtyDice={this.props.d4Result} onPress={(checked) => this.HandleCbPress(checked, 'd4')}/>
                    <DiceCheckbox pic={imgD5} qtyDice={this.props.d5Result} onPress={(checked) => this.HandleCbPress(checked, 'd5')}/>
                    <DiceCheckbox pic={imgD6} qtyDice={this.props.d6Result} onPress={(checked) => this.HandleCbPress(checked, 'd6')}/>
                </View>

                <Button 
                        mode="contained" 
                        onPress={this.RerollDice.bind(this)}
                        style={styles.btnReroll}
                    >
                        REROLL
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: margin.sm,
        flexDirection: 'column'
    },

    subContainer: {
        marginTop: margin.sm,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },

    btnReroll: {
        marginTop: margin.sm,
        backgroundColor:colors.secondary,
        width: dimensions.fullWidth / 2,
        alignSelf: 'center'
    }
  });