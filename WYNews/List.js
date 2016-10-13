/**
 * Created by zhanggeng on 2016/9/28.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

let dimens = require('Dimensions');
let screenW = dimens.get('window').width;
let screenH = dimens.get('window').height;

const styles = StyleSheet.create({
    list:{
        width: screenW,
        height: 35,
        backgroundColor: 'white',
        justifyContent: 'center'

    }
});

class List extends Component{
    render(){
        return(
            <View style={{width: screenW , height: 38 }}>
                <View style={styles.list}>
                    <Text style={{margin: 10 , color: 'black'}}> {this.props.content} </Text>
                    <View style={{
                        width : screenW ,
                        height: 1 ,
                        backgroundColor: 'red',
                        position: 'absolute'
                    }}/>
                </View>
            </View>

        )
    }
}

export  default  List;