import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Home } from '../screens/Home/Home';
import { CardForm } from '../screens/CardForm/CardForm';
import { Cards } from '../screens/Cards/Cards';


const {Navigator, Screen} = createNativeStackNavigator();

function AppRoutes() {
  return (
      <Navigator screenOptions={{headerShown: false}} >
        <Screen  name="home" component={Home} />
        <Screen name="register" component={CardForm} />
        <Screen name="cards" component={Cards} />
      </Navigator>
  );
}


export default AppRoutes;