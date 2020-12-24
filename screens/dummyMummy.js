import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <HomeScreen/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  BottomTab:{screen: AppTabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
