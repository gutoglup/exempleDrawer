import React, { Component } from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Dashboard from './Dashboard';
import Login from './Login';

const drawer = createDrawerNavigator({
  Dashboard: {
    screen: Dashboard,
  },
});

const Stack = createStackNavigator({
  Login: {
    screen: Login,
  },
  Drawer: {
    screen: drawer,
  },
});

export default class App extends Component {
  render = () => {
    return <Stack />;
  };
}
