import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/Home';
import ExampleScreen from '../screens/Example';

export default StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Example: {
      screen: ExampleScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);