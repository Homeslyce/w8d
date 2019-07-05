import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import MainRoller from './Components/MainRoller';
import DiceResult from './Components/DiceResult';
import DiceStats from './Components/DiceStats';
import {colors, fonts, padding, dimensions} from './Styles/base';

export default function App() {
  return (
    <View>
      <ImageBackground source={require('./assets/paperBackgroud.png')} style={styles.backgroundStyle}>
        <View style={styles.componentContainer}>
          <MainRoller />
          <DiceStats />
          <DiceResult />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    width: dimensions.fullWidth,
    height: dimensions.fullHeight},

  componentContainer: {
    flex: 1,
    flexDirection: 'column'
  }
});
