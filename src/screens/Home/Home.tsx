import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button/Button';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { startLoad, stopLoad } from '../../store/LoadingReducer';
import { useAppDispath } from '../../store/hooks';



export function Home(): React.JSX.Element {
    const navigation = useNavigation()
    const isFocused = useIsFocused();
    const textPosition = useSharedValue(-10)
   const dispatch = useAppDispath()

   function handleGoToCardsScreen(){
      navigation.navigate('cards')
     
   }

    React.useEffect(() => {
      if(isFocused){
         textPosition.value = withSpring(-60,{
            mass: 1,
            damping: 15,
            stiffness: 200,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
         }) 
      }else{
         textPosition.value = withSpring(-100,{
            mass: 1,
            damping: 15,
            stiffness: 200,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
         }) 

      }
    }, [isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Animated.Text style={[styles.walletText, {top: textPosition}]}>
        Wallet Test 
        </Animated.Text>
        <View style={styles.buttonArea}>
        <Button onPress={() => handleGoToCardsScreen()} text='meus cartões' />
        <Button onPress={() => navigation.navigate('register')} type='secundary' text='cadastrar cartão' />
        </View>
        </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 container: {
    flex:1,
    backgroundColor:'transparent',
    alignItems:'center',
    justifyContent:'center',
 },
 content: {
    alignItems:'center',
    justifyContent:'center',
    gap:30,
    backgroundColor:'#142995'
 },
 walletText: {
    color: '#fff',
    fontSize:28,
    lineHeight:32,
    fontWeight:'400',
    fontFamily:'PTSansCaption-Regular',
    position:'absolute',
    top:-10
 },
 buttonArea:{
    gap:20,
 },
 blueButton:{
    backgroundColor:'#12C2E9',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:10,
    paddingVertical:20,
    width:300,
    gap:10,
    borderRadius:12,
 },
 greenButton:{
    backgroundColor:'#A5FF32',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:10,
    paddingVertical:20,
    width:300,
    gap:10,
    borderRadius:12,
 }
});


