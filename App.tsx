import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainView from './Components/MainView';

const AppStackNavigator = createStackNavigator({
  Main:{ // MainView 컴포넌트를 네비게이터에 등록
    screen: MainView,
    navigationOptions: {
      header: null // 앱 상단 바 삭제
    } 
  }
});

export default createAppContainer(AppStackNavigator);