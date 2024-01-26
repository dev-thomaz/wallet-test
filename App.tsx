/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Routes } from './src/routes';
import { useSharedValue,  } from 'react-native-reanimated';
import { Provider } from 'react-redux';
import {  store } from './src/store/store';
import { Background } from './src/components/Background/Background';


function App(): React.JSX.Element {
const width = useSharedValue(350)
const height = useSharedValue(350)



  return (
    <Provider store={store}>

    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Background>
   <Routes  />
      </Background>

    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
     flex:1,
     zIndex:2
      
  },
 
 });

export default App;
