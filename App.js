import React from "react";
import { StyleSheet, ImageBackground, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import MainLayout from "./Components/MainLayout";
import { Provider as PaperProvider } from "react-native-paper";
import { dimensions } from "./Styles/base";
import imgBackground from "./assets/castleBackground.png";

export default function App() {
    return (
        <PaperProvider>
            <DismissKeyboard>
                <View>
                    <View style={styles.header}></View>
                    <ImageBackground source={imgBackground} style={styles.backgroundStyle}>
                        <MainLayout />
                    </ImageBackground>
                </View>
            </DismissKeyboard>
        </PaperProvider>
    );
}

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    header: {
        height: 30,
    },
    backgroundStyle: {
        width: dimensions.fullWidth,
        height: dimensions.fullHeight,
    },
});
