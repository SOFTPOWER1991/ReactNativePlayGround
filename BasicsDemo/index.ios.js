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
  TextInput,
    ScrollView,
    Image,
  View
} from 'react-native';


class BasicsDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

  render() {
    return (
      // <View style={styles.container}>
      //   <View style={{width:50, height:50,backgroundColor:'red'}}/>
      //   <View style={{width:100, height:100,backgroundColor:'green'}}/>
      //   <View style={{width:150, height:150,backgroundColor:'skyblue'}}/>
      // </View>

        // <View style={{flex:1 , flexDirection: 'column' }}>
        //   <View style={{flex:1,backgroundColor:'red'}}/>
        //   <View style={{flex: 2,backgroundColor:'green'}}/>
        //   <View style={{flex:2,backgroundColor:'skyblue'}}/>
        // </View>


        // <View style={styles.container}>
        //
        //     <TextInput
        //         style={styles.textInputStyle}
        //
        //         placeholder={"Plase Input Text Here"}
        //
        //         autoCapitalize = 'characters'
        //
        //         multiline = {true}
        //
        //         numberOfLines = {3}
        //
        //         onChangeText = { (text) => this.setState({text})}/>
        //
        //     <Text style={{padding: 10, fontSize: 42}}>
        //         {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        //     </Text>
        //
        // </View>


        

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems : 'center'
  },

    textInputStyle:{
        color:'red',
        height : 40,
        borderColor: 'green',
        borderWidth : 1,
        margin:10,
        borderRadius : 3,
        justifyContent: 'center',
        alignItems:'center',
        paddingLeft:10,
        borderBottomColor:'blue',

    }
});

AppRegistry.registerComponent('BasicsDemo', () => BasicsDemo);
