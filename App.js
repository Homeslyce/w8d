import React from 'react';
import { StyleSheet, ImageBackground, View, Dimensions } from 'react-native';
import MainRoller from './Components/MainRoller';

export default function App() {
  return (
    <View>
      <ImageBackground 
        source={require('./assets/paperBackgroud.png')}
        style={styles.backgroundStyle}
      >
        <MainRoller />
      </ImageBackground>
    </View>
  );
}

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    width: width,
    height: height,
    resizeMode: 'cover'},
});
