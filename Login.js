import React, { Component } from 'react';
import { View } from 'react-native';

export default class Login extends Component {
  componentDidMount = () => {
    this.props.navigation.replace('Drawer');
  };

  render = () => {
    return <View style={{ backgroundColor: 'blue', flex: 1 }} />;
  };
}
