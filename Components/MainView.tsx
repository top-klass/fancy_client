import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';

import StoreTab from './AppTabNavigator/StoreTab';
import UserTab from './AppTabNavigator/UserTab';
import WalletTab from './AppTabNavigator/WalletTab';

import { createAppContainer } from 'react-navigation'; 
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

const AppTabNavigator = createMaterialTopTabNavigator({
  WalletTab: { screen: WalletTab },
  StoreTab: { screen: StoreTab },
  UserTab: { screen: UserTab }
}, {
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      ...Platform.select({
        ios:{
          backgroundColor:'white',
        }
      })
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    upperCaseLabel: true,
    showLabel: true,
    showIcon: true,
  }
});

const AppTabContainer = createAppContainer(AppTabNavigator);

export default class MainView extends Component {
  render() {
    return <AppTabContainer/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});