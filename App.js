import React from 'react';

import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import {AppTabNavigator} from './components/AppTabNavigator';
export default function App() {
  return (
    <AppContainer/>
  );
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
 
  AppTabNavigator: {screen: AppTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);
