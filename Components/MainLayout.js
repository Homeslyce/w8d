import React, { Component } from 'react';
import { StyleSheet, View, Keyboard, Alert } from 'react-native';
import { colors, padding, dimensions, margin } from '../Styles/base';
import { Button, TextInput } from 'react-native-paper';
import { RndDiceRoll } from '../Object/DiceTable';
import DiceResult from './DiceResult';
import DiceStats from './DiceStats';

export default class MainLayout extends Component {

    constructor(props) { //even if we don't use props, it is recommended to always put it for future uses
        super(props); //call the constructor of its parent class, and puts values in this.props
        this.state = {
            qtyDice: "",
            d1: 0,
            d2: 0,
            d3: 0,
            d4: 0,
            d5: 0,
            d6: 0,
            onePlus: 0,
            twoPlus: 0,
            threePlus: 0,
            fourPlus: 0,
            fivePlus: 0,
            sixPlus: 0
        };
    }

    updateAllStates(diceTable) {
        this.setState({
            d1: diceTable.d1,
            d2: diceTable.d2,
            d3: diceTable.d3,
            d4: diceTable.d4,
            d5: diceTable.d5,
            d6: diceTable.d6,
            onePlus: diceTable.d1 + diceTable.d2 + diceTable.d3 + diceTable.d4 + diceTable.d5 + diceTable.d6,
            twoPlus: diceTable.d2 + diceTable.d3 + diceTable.d4 + diceTable.d5 + diceTable.d6,
            threePlus: diceTable.d3 + diceTable.d4 + diceTable.d5 + diceTable.d6,
            fourPlus: diceTable.d4 + diceTable.d5 + diceTable.d6,
            fivePlus: diceTable.d5 + diceTable.d6,
            sixPlus: diceTable.d6
        });
    }

    RollDice() {
        if (this.state.qtyDice === "")
            Alert.alert("You must enter a quantity of dice before rolling");
        else {
            const diceTable = RndDiceRoll(this.state.qtyDice);
            this.updateAllStates(diceTable);
            Keyboard.dismiss();
        }
    }

    //Function passed to the child element DiceResult. The result returned will update the DiceStats and DiceResult with the new rerolled results
    HandleReroll(diceTable) {
        this.updateAllStates(diceTable);
        Keyboard.dismiss();
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.rollerContainer}>
                    <TextInput
                        label="Qty of Dice"
                        value={this.state.qtyDice.toString()}
                        onChangeText={(text) => this.setState({ qtyDice: text })}
                        onFocus={() => this.setState({ qtyDice: "" })} //resets the txt input when user clicks on it
                        mode="contained"
                        style={styles.textinput}
                        theme={{ colors: { primary: colors.primary } }} //change the focus border color
                        underlineColor="transparent"
                        maxLength={6}
                        keyboardType="numeric"
                    />

                    <Button
                        mode="contained"
                        onPress={this.RollDice.bind(this)} //the "".bind(this)"" transfer the "this" object to the function. This lets the function accessing the component's state
                        style={styles.btnRoll}
                    >
                        ROLL'EM
                    </Button>
                </View>

                <DiceStats
                    onePlus={this.state.onePlus}
                    twoPlus={this.state.twoPlus}
                    threePlus={this.state.threePlus}
                    fourPlus={this.state.fourPlus}
                    fivePlus={this.state.fivePlus}
                    sixPlus={this.state.sixPlus}
                />

                <DiceResult
                    d1Result={this.state.d1}
                    d2Result={this.state.d2}
                    d3Result={this.state.d3}
                    d4Result={this.state.d4}
                    d5Result={this.state.d5}
                    d6Result={this.state.d6}
                    onReroll={(diceTable) => this.HandleReroll(diceTable)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContrainer: {
        flex: 1,
        flexDirection: 'column'
    },

    rollerContainer: {
        flexDirection: 'row',
        paddingTop: padding.xl,
        paddingBottom: padding.lg,
        paddingLeft: padding.sm,
        paddingRight: padding.sm,
        height: dimensions.fullHeight / 5.2,
        width: dimensions.fullWidth
    },

    textinput: {
        width: dimensions.fullWidth / 2.7
    },

    btnRoll: {
        backgroundColor: colors.primary,
        marginLeft: margin.sm,
        justifyContent: 'center'
    }
});