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
import  List from './List';
import Box from './Box';

class WYNews extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Header/>
          <List content = "hello react native"/>
          <List content = "hello react native"/>
          <List content = "hello react native"/>
          <List content = "hello react native"/>
          <List content = "hello react native"/>
          <List content = "hello react native"/>

          <Text style={{fontSize: 25 , color: 'red' , margin: 10}}>今日要闻</Text>

          <Box>
            <Text>1. hello</Text>
            <Text>2. hello</Text>
            <Text>3. hello</Text>
            <Text>4. hello</Text>
          </Box>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,


    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('WYNews', () => WYNews);
