import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen'
import RegisterScreen from '../screens/RegisterScreen'

export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/ask.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "home",
    }
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/img.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Register for Adoption",
    }
  },
  
  
});
