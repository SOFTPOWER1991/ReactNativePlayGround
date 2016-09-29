/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import  Header from  './Header';

class WYNews extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Header/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,


    backgroundColor: 'green',
  },
});

AppRegistry.registerComponent('WYNews', () => WYNews);
