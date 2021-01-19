import React, { useState } from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { colors, fonts } from "../Styles/base";

export default function DiceCheckbox({ pic, qtyDice, onPress }) {
    const [checked, setChecked] = useState(false);

    function CbPress() {
        setChecked(!checked); //reverse the checked state everytime the cb is clicked
        onPress(!checked); //When sending the state to the parent component, reverse the state to represent the current state and not the previous state
    }

    return (
        <View style={styles.container}>
            <Image source={pic} style={styles.image} />
            <Text style={styles.text}>{qtyDice}</Text>
            <Checkbox value={checked} onValueChange={CbPress} color={colors.primary} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
    },

    image: {
        height: 60,
        width: 60,
    },

    text: {
        fontSize: fonts.md,
        color: "white",
    },
});
