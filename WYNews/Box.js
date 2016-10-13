import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

let dimens = require('Dimensions');
let screenW = dimens.get('window').width;
let screenH = dimens.get('window').height;


class Box extends Component{

    click(){
        alert("点击事件被触发!")
    }


    render(){
        return(
            <View>
                {
                    React.Children.map(
                        this.props.children , (text) => {
                            return(
                                <Text style={{width: screenW , height: 35 , margin: 5 , justifyContent: 'center' , alignItems: 'center' , backgroundColor: 'blue'}}  onPress = {() => this.click()}>{text}</Text>
                            )
                        }
                    )
                }
            </View>
        )
    }
}

export default Box;