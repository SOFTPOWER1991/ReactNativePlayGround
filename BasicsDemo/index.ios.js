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
    ListView,
  View
} from 'react-native';


class BasicsDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
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


        // <ScrollView
        //     contentContainerStyle={styles.container}>
        //     <Text style={{fontSize:15}}>Scroll me plz</Text>
        //     <Image
        //         style={styles.imgStyle}
        //         source={require('./img/favicon.png')} />
        //     <Image
        //         style={styles.imgStyle}
        //         source={require('./img/favicon.png')} />
        //     <Image
        //         style={styles.imgStyle}
        //         source={require('./img/favicon.png')} />
        //     <Image
        //         style={styles.imgStyle}
        //         source={require('./img/favicon.png')} />
        //     <Image
        //         style={styles.imgStyle}
        //         source={require('./img/favicon.png')} />
        //     <Text style={{fontSize:15}}>If you like</Text>
        //     <Image
        //         style={styles.imgStyle}
        //         source={require('./img/favicon.png')} />
        //     <Image
        //         style={styles.imgStyle}
        //         source={require('./img/favicon.png')} />
        //     <Image
        //         style={styles.imgStyle}
        //         source={require('./img/favicon.png')} />
        //     <Image
        //         style={styles.imgStyle}
        //         source={require('./img/favicon.png')} />
        //     <Image
        //         style={styles.imgStyle}
        //         source={require('./img/favicon.png')} />
        //     <Text style={{fontSize:15}}>Scrolling down</Text>
        //     <Image
        //         style={styles.imgStyle}
        //         source={require('./img/favicon.png')} />
        //     <Image
        //         style={styles.imgStyle}
        //         source={require('./img/favicon.png')} />
        //     <Image
        //         style={styles.imgStyle}
        //         source={require('./img/favicon.png')} />
        //     <Image
        //         style={styles.imgStyle}
        //         source={require('./img/favicon.png')} />
        //     <Image
        //         style={styles.imgStyle}
        //         source={require('./img/favicon.png')} />
        // </ScrollView>


        <View style={{paddingTop: 22}}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#f4f4f4',
      flexDirection: 'column',
      alignItems:'center',

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

    },

    imgStyle:{
        width: 300,
        height: 300,
        backgroundColor: 'transparent',
        margin: 10,
    }
});

AppRegistry.registerComponent('BasicsDemo', () => BasicsDemo);
