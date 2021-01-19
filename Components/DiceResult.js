import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { RndDiceRoll } from "../Object/DiceTable";
import { Button } from "react-native-paper";
import { colors, dimensions, margin } from "../Styles/base";
import DiceCheckbox from "./DiceCheckbox";
import imgD1 from "../assets/d1.png";
import imgD2 from "../assets/d2.png";
import imgD3 from "../assets/d3.png";
import imgD4 from "../assets/d4.png";
import imgD5 from "../assets/d5.png";
import imgD6 from "../assets/d6.png";

export default function DiceResult({ d1Result, d2Result, d3Result, d4Result, d5Result, d6Result, onReroll }) {
    const [d1Checked, setD1Checked] = useState(false);
    const [d2Checked, setD2Checked] = useState(false);
    const [d3Checked, setD3Checked] = useState(false);
    const [d4Checked, setD4Checked] = useState(false);
    const [d5Checked, setD5Checked] = useState(false);
    const [d6Checked, setD6Checked] = useState(false);

    function RerollDice() {
        let diceResult = [d1Result, d2Result, d3Result, d4Result, d5Result, d6Result];
        let diceChecked = [d1Checked, d2Checked, d3Checked, d4Checked, d5Checked, d6Checked];

        let qtyDiceToReroll = 0;
        let oneOrMoreCbChecked = false;

        //Validate if the user checked at least 1 dice to reroll
        for (let dice = 0; dice < diceChecked.length; dice++) {
            if (diceChecked[dice]) {
                oneOrMoreCbChecked = true;
            }
        }

        if (oneOrMoreCbChecked) {
            //Set the checked dice to 0
            for (let dice = 0; dice < diceResult.length; dice++) {
                if (diceChecked[dice]) {
                    qtyDiceToReroll += diceResult[dice];
                    diceResult[dice] = 0;
                }
            }

            //Reroll the qty of dice removed from the checked dice
            let diceTable = RndDiceRoll(qtyDiceToReroll);

            //Add the reroll results to the modified results with 0s where the checkbox was checked
            diceTable.d1 += diceResult[0];
            diceTable.d2 += diceResult[1];
            diceTable.d3 += diceResult[2];
            diceTable.d4 += diceResult[3];
            diceTable.d5 += diceResult[4];
            diceTable.d6 += diceResult[5];

            onReroll(diceTable);
        } else Alert.alert("You must check at least 1 type of dice before rerolling");
    }

    //Function passed to the child element DiceCheckbox that returns the state of the checkbox
    function HandleCbPress(checked, diceCategory) {
        switch (diceCategory) {
            case "d1":
                setD1Checked(checked);
                break;
            case "d2":
                setD2Checked(checked);
                break;
            case "d3":
                setD3Checked(checked);
                break;
            case "d4":
                setD4Checked(checked);
                break;
            case "d5":
                setD5Checked(checked);
                break;
            case "d6":
                setD6Checked(checked);
                break;
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <DiceCheckbox pic={imgD1} qtyDice={d1Result} onPress={(checked) => HandleCbPress(checked, "d1")} />
                <DiceCheckbox pic={imgD2} qtyDice={d2Result} onPress={(checked) => HandleCbPress(checked, "d2")} />
                <DiceCheckbox pic={imgD3} qtyDice={d3Result} onPress={(checked) => HandleCbPress(checked, "d3")} />
            </View>

            <View style={styles.subContainer}>
                <DiceCheckbox pic={imgD4} qtyDice={d4Result} onPress={(checked) => HandleCbPress(checked, "d4")} />
                <DiceCheckbox pic={imgD5} qtyDice={d5Result} onPress={(checked) => HandleCbPress(checked, "d5")} />
                <DiceCheckbox pic={imgD6} qtyDice={d6Result} onPress={(checked) => HandleCbPress(checked, "d6")} />
            </View>

            <Button mode="contained" onPress={RerollDice} style={styles.btnReroll}>
                REROLL
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: margin.sm,
        flexDirection: "column",
    },

    subContainer: {
        marginTop: margin.sm,
        justifyContent: "space-evenly",
        flexDirection: "row",
    },

    btnReroll: {
        marginTop: margin.sm,
        backgroundColor: colors.secondary,
        width: dimensions.fullWidth / 2,
        alignSelf: "center",
    },
});
