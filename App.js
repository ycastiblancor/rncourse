// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Screens
import HomeScreen from './src/screens/HomeScreen'
import UserList from './src/screens/UserList'
import userDetails from './src/screens/UserDetails'



const AppNavigator = createStackNavigator({
  
  homeScreen:{
    screen: HomeScreen
  },
  userList:{
    screen: UserList
  },
  userDetails:{
    screen: userDetails
  },
});
export default createAppContainer (AppNavigator);