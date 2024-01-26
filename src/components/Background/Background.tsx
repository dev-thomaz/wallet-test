
import React, {useEffect} from 'react';
import { Alert, StyleSheet, View, Text } from 'react-native';
import Animated,{ useSharedValue,  withSpring } from 'react-native-reanimated';
import { Provider, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Icon from '../../../assets/svg/icon-wallet.svg'

type Props = {
    children:  JSX.Element 
}
export function Background({children}: Props): React.JSX.Element {
const width = useSharedValue(350)
const height = useSharedValue(350)
const top = useSharedValue(-160)
const right = useSharedValue(-160)
const bottom = useSharedValue(-160)
const left = useSharedValue(-160)
const transform = useSharedValue({rotate: '45deg'})

const {isLoading} = useSelector((state: RootState) => state.loading)

useEffect(() => {
    if(isLoading){
        width.value = withSpring(500)
        height.value = withSpring(500)
        top.value = withSpring(-180) 
        right.value = withSpring(-260) 
        bottom.value = withSpring(-180) 
        left.value = withSpring(-260)
        transform.value = withSpring({rotate: '45deg'})
    }else{
        width.value = withSpring(350) 
        height.value = withSpring(350) 
        top.value = withSpring(-160) 
        right.value = withSpring(-160) 
        bottom.value = withSpring(-160) 
        left.value = withSpring(-160) 
        transform.value = withSpring({rotate: '55deg'})


          
    }
}, [isLoading])


  return (

    <View style={styles.container} >
        <Animated.View style={[styles.topSquare, {height:height, width:width, transform: [transform.value], top: top, left: left}]} />
        {isLoading 
        
        ? <View style={{zIndex:2, flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text >
            <Icon width={150} height={150} />
            </Text>
            </View>
        :<>{children}</> 
        }
        <Animated.View style={[styles.bottomSquare,  {height:height, width:width, transform: [transform.value], bottom: bottom, right: right}]} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex:1,
     zIndex:-10,
     backgroundColor:'#142995',
  },
  topSquare: {
    position:'absolute',
    backgroundColor: '#eeeeee',
    width:350,
    height:350,
    top:-160,
    left:-160,
    transform: [{rotate: '45deg'}],
    borderRadius:50,
    opacity:.15,
    zIndex:-1
 },
 bottomSquare: {
  position:'absolute',
  backgroundColor: '#eeeeee',
  width:350,
  height:350,
  bottom:-160,
  right:-160,
  transform: [{rotate: '45deg'}],
  borderRadius:50,
  opacity:.15,
  zIndex:-1
}
 });

