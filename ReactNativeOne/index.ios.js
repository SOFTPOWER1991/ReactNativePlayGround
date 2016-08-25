/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';



var textStyle = {

    fontSize: 14,
    color: 'white',
    backgroundColor: '#232323',
    padding: 10,
    textAlign: 'center'
};


class ReactNativeOne extends Component {
    render() {
        return (
            // <View style={styles.container}>
            //   <Text style={styles.welcome}>
            //     Welcome to React Native!
            //   </Text>
            //   <Text style={styles.instructions}>
            //     To get started, edit index.android.js
            //   </Text>
            //   <Text style={styles.instructions}>
            //     Double tap R on your keyboard to reload,{'\n'}
            //     Shake or press menu button for dev menu
            //   </Text>
            // </View>
            < View style = {
                {
                    width: 200,
                    height: 500,
                    backgroundColor: 'red',
                    marginTop: 200,
                    marginLeft: 100,
                    padding: 10
                }
            } > 
            

             <Text style = {[myStyles.myTextFonts, myStyles.myTextColor, myStyles.myTextBg]} > 
            Hello, React Native! 
            < /Text>  

             <Text style = {[myStyles.myTextFonts, myStyles.myTextColor, myStyles.myTextBg , {backgroundColor: 'green'}]} > 
              React Native : Learn once , write anywhere! 
            < /Text>  


            </View>
        );
    }
}

// my styles , StyleSheet.create
const myStyles = StyleSheet.create({

  myTextStyles: {
    width: 200,
    height: 300,
    fontSize: 20,
    backgroundColor:'#BBBBBB',
    color: 'green',
    marginTop : 10,
    padding: 20
  },

  myTextStyles2:{
    width: 200,
    height: 200,
    fontSize: 20,
    backgroundColor:'yellow',
    color: 'green',
    marginTop : 10,
    padding: 20
  },

  myTextFonts:{
    fontSize: 15
  },

  myTextColor:{
    color: '#000000'
  },

  myTextBg:{
    backgroundColor: '#DEDEDE'
  },

});



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('ReactNativeOne', () => ReactNativeOne);