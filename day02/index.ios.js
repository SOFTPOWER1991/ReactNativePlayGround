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
            <View style={[styles.view , {height: 150} ]}>
            </View>


            <View style={ {width: 90 , height: 100 , alignSelf: 'flex-start' , backgroundColor: 'red'}}>
            </View>

            <View style={[styles.view , {height: 200}]}>
            </View>

            <View style={[styles.view , {height: 400}]}>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  view:{
    backgroundColor: 'white',
    width:50,

    margin: 10
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
