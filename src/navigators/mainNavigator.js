/* eslint-disable react/display-name */
import React from 'react';
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Drawer from './Drawer/Drawer';
import MainTab from './mainTab';

const DrawerStack = createStackNavigator({
  Drawer
});
const MainStack = createStackNavigator({ MainTab });
export default createAppContainer(
  createDrawerNavigator(
    {
      MainStack,
      DrawerStack
    },
    {
      contentComponent: props => <Drawer {...props} />
    }
  )
);
