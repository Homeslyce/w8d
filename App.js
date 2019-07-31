import React from 'react';
import { StyleSheet, ImageBackground, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MainRoller from './Components/MainRoller';
import { Provider as PaperProvider } from 'react-native-paper';
import {dimensions} from './Styles/base';
import imgBackground from './assets/paperBackgroud.png'

export default function App() {
  return (
    <PaperProvider>
      <DismissKeyboard>
        <View>
          <ImageBackground source={imgBackground} style={styles.backgroundStyle}>
            <MainRoller />
          </ImageBackground>
        </View>
      </DismissKeyboard>
    </PaperProvider>
  );
}

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  backgroundStyle: {
    width: dimensions.fullWidth,
    height: dimensions.fullHeight},
});
