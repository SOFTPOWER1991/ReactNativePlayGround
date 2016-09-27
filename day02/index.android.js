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
  View,
  PixelRatio
} from 'react-native';

class day01 extends Component {

  render() {

    console.log('11111');
    return (
      <View style={styles.container}>
            <View style={styles.myView}>

              <View style={[styles.view1, styles.flex , styles.rightLine] }>
                <Text  style={styles.textStyle}>
                  酒店
                </Text>
              </View>

              <View style={[styles.view2 ,  styles.rightLine]}>

                <View style={[styles.flex , styles.bottomLine] }>
                  <Text  style={styles.textStyle}>
                    海外酒店
                  </Text>
                </View>
                <View style={[styles.flex ] }>
                  <Text  style={styles.textStyle}>
                    特惠酒店
                  </Text>
                </View>
              </View>

              <View style={styles.view3}>
                <View style={[styles.viewflex ,  styles.bottomLine] }>
                  <Text  style={styles.textStyle}>
                    团购
                  </Text>
                </View>
                <View style={[styles.viewflex ] }>
                  <Text  style={styles.textStyle}>
                    客栈公寓
                  </Text>
                </View>
              </View>
            </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex : 1,
    backgroundColor:'#f4f4f4'
  },

  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  viewflex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16
  },

  myView:{
    position:'absolute',
    height:84,
    top:35,
    left:5,
    right: 5,
    flexDirection: 'row',
    backgroundColor:'black',
    borderRadius: 5
  },

  view1:{
    flex:1,

  },
  view2:{
    flex:1,

  },
  view3:{
    flex:1,

  },
  rightLine:{
    borderRightColor:'white',
    borderRightWidth : 1 / PixelRatio.get()
  },

  bottomLine:{
    borderBottomColor:'white',
    borderBottomWidth : 1 / PixelRatio.get()
  }

});

AppRegistry.registerComponent('day01', () => day01);
