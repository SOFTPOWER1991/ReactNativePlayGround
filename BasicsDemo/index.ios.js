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

class BasicsDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{width:50, height:50,backgroundColor:'red'}}/>
        <View style={{width:100, height:100,backgroundColor:'green'}}/>
        <View style={{width:150, height:150,backgroundColor:'skyblue'}}/>
      </View>

        // <View style={{flex:1 , flexDirection: 'column' }}>
        //   <View style={{flex:1,backgroundColor:'red'}}/>
        //   <View style={{flex: 2,backgroundColor:'green'}}/>
        //   <View style={{flex:2,backgroundColor:'skyblue'}}/>
        // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems : 'center'
  }
});

AppRegistry.registerComponent('BasicsDemo', () => BasicsDemo);
