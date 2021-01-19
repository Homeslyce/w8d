import React, { useState } from "react";
import { StyleSheet, View, Keyboard, Alert } from "react-native";
import { colors, padding, dimensions, margin } from "../Styles/base";
import { Button, TextInput } from "react-native-paper";
import { RndDiceRoll } from "../Object/DiceTable";
import DiceResult from "./DiceResult";
import DiceStats from "./DiceStats";

export default function MainLayout() {
    const [qtyDice, setQtyDice] = useState("");
    const [d1, setD1] = useState(0);
    const [d2, setD2] = useState(0);
    const [d3, setD3] = useState(0);
    const [d4, setD4] = useState(0);
    const [d5, setD5] = useState(0);
    const [d6, setD6] = useState(0);
    const [onePlus, setOnePlus] = useState(0);
    const [twoPlus, setTwoPlus] = useState(0);
    const [threePlus, setThreePlus] = useState(0);
    const [fourPlus, setFourPlus] = useState(0);
    const [fivePlus, setFivePlus] = useState(0);
    const [sixPlus, setSixPlus] = useState(0);

    function UpdateAllStates(diceTable) {
        setD1(diceTable.d1);
        setD2(diceTable.d2);
        setD3(diceTable.d3);
        setD4(diceTable.d4);
        setD5(diceTable.d5);
        setD6(diceTable.d6);
        setOnePlus(diceTable.d1 + diceTable.d2 + diceTable.d3 + diceTable.d4 + diceTable.d5 + diceTable.d6);
        setTwoPlus(diceTable.d2 + diceTable.d3 + diceTable.d4 + diceTable.d5 + diceTable.d6);
        setThreePlus(diceTable.d3 + diceTable.d4 + diceTable.d5 + diceTable.d6);
        setFourPlus(diceTable.d4 + diceTable.d5 + diceTable.d6);
        setFivePlus(diceTable.d5 + diceTable.d6);
        setSixPlus(diceTable.d6);
    }

    function RollDice() {
        if (!qtyDice) Alert.alert("You must enter a quantity of dice before rolling");
        else {
            const diceTable = RndDiceRoll(qtyDice);
            UpdateAllStates(diceTable);
            Keyboard.dismiss();
        }
    }

    //Function passed to the child element DiceResult. The result returned will update the DiceStats and DiceResult with the new rerolled results
    function HandleReroll(diceTable) {
        UpdateAllStates(diceTable);
        Keyboard.dismiss();
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.rollerContainer}>
                <TextInput
                    label="Qty of Dice"
                    value={qtyDice.toString()}
                    onChangeText={(text) => setQtyDice(text)}
                    onFocus={() => setQtyDice("")} //resets the txt input when user clicks on it
                    mode="contained"
                    style={styles.textinput}
                    theme={{ colors: { primary: colors.primary } }} //change the focus border color
                    underlineColor="transparent"
                    maxLength={6}
                    keyboardType="numeric"
                />

                <Button mode="contained" onPress={RollDice} style={styles.btnRoll}>
                    ROLL'EM
                </Button>
            </View>

            <DiceStats
                onePlus={onePlus}
                twoPlus={twoPlus}
                threePlus={threePlus}
                fourPlus={fourPlus}
                fivePlus={fivePlus}
                sixPlus={sixPlus}
            />

            <DiceResult
                d1Result={d1}
                d2Result={d2}
                d3Result={d3}
                d4Result={d4}
                d5Result={d5}
                d6Result={d6}
                onReroll={(diceTable) => HandleReroll(diceTable)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContrainer: {
        flex: 1,
        flexDirection: "column",
    },

    rollerContainer: {
        flexDirection: "row",
        paddingTop: padding.xl,
        paddingBottom: padding.lg,
        paddingLeft: padding.sm,
        paddingRight: padding.sm,
        height: dimensions.fullHeight / 5.2,
        width: dimensions.fullWidth,
    },

    textinput: {
        width: dimensions.fullWidth / 2.7,
    },

    btnRoll: {
        backgroundColor: colors.primary,
        marginLeft: margin.sm,
        justifyContent: "center",
    },
});
