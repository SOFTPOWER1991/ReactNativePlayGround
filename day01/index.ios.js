/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @zhanggeng
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class day01 extends Component {

  render() {

    console.log('11111');
    return (
      <View style={styles.container}>

            <View style={[styles.view1 , {backgroundColor: 'red'}]}>
            </View>

            <View style={[styles.view2 ]}>
            </View>

            <View style={[styles.view3 ]}>
            </View>

            <View style={[styles.view4 ]}>
            </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  },
  view1:{
    width: 100,
    height: 100,
    backgroundColor:'blue',
    position: 'relative',
    left: 30,
    top: 30
  },
  view2:{
    width: 100,
    height: 100,
    backgroundColor:'blue',
    position: 'absolute',
    right: 30,
    top: 30
  },
  view3:{
    width: 100,
    height: 100,
    backgroundColor:'white',
    position: 'absolute',
    left: 30,
    bottom: 30
  },
  view4:{
    width: 100,
    height: 100,
    backgroundColor:'blue',
    position: 'absolute',
    right: 30,
    bottom: 30
  },
  item:{
    flex:1
  },
});

AppRegistry.registerComponent('day01', () => day01);
