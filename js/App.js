import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  StyleSheet,
  View
} from 'react-native';
import configureStore from './config/store';
import RootStackNavigator from './navigator';

const store = configureStore().store;

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootStackNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
