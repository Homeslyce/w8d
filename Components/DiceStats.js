import React from "react";
import { View, StyleSheet } from "react-native";
import { margin, dimensions } from "../Styles/base";
import { DataTable } from "react-native-paper";

export default function DiceResult({ onePlus, twoPlus, threePlus, fourPlus, fivePlus, sixPlus }) {
    return (
        <View style={styles.container}>
            <DataTable style={styles.dataTable}>
                <DataTable.Header>
                    <DataTable.Title>Statistic</DataTable.Title>
                    <DataTable.Title numeric>Quantity</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>1+</DataTable.Cell>
                    <DataTable.Cell numeric>{onePlus}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>2+</DataTable.Cell>
                    <DataTable.Cell numeric>{twoPlus}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>3+</DataTable.Cell>
                    <DataTable.Cell numeric>{threePlus}</DataTable.Cell>
                </DataTable.Row>
            </DataTable>

            <DataTable style={styles.dataTable}>
                <DataTable.Header>
                    <DataTable.Title>Statistic</DataTable.Title>
                    <DataTable.Title numeric>Quantity</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>4+</DataTable.Cell>
                    <DataTable.Cell numeric>{fourPlus}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>5+</DataTable.Cell>
                    <DataTable.Cell numeric>{fivePlus}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell>6+</DataTable.Cell>
                    <DataTable.Cell numeric>{sixPlus}</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },

    dataTable: {
        backgroundColor: "white",
        marginLeft: margin.sm,
        borderRadius: 8,
        width: dimensions.fullWidth / 2.2,
    },
});
