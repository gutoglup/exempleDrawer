import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class Dashboard extends Component {
  logout = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
      key: null,
    });
    this.props.navigation.dispatch(resetAction);
  };

  render = () => {
    return (
      <View style={{ backgroundColor: 'red', flex: 1 }}>
        <Button title="Logout" onPress={this.logout} />
      </View>
    );
  };
}
