import React, { useEffect, useState } from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { colors, fonts } from "../Styles/base";

export default function DiceCheckbox({ pic, qtyDice, onPress }) {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        onPress(checked);
    }, [checked]);

    return (
        <View style={styles.container}>
            <Image source={pic} style={styles.image} />
            <Text style={styles.text}>{qtyDice}</Text>
            <Checkbox value={checked} onValueChange={setChecked} color={colors.primary} />
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
