/**
 * Created by zhanggeng on 2016/9/28.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

let dimens = require('Dimensions');
let screenW = dimens.get('window').width;
let screenH = dimens.get('window').height;

const styles = StyleSheet.create({

    Header: {
        width : screenW,
        height : 60,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    } ,

    base:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    }

}
);
class Header extends  Component{
    render(){
        return(
            <View style={styles.Header}>
                <Text style={[styles.base]}>网易</Text>
                <Text style={[styles.base]}>新闻</Text>
                <Text style={[styles.base]}>有态度</Text>
            </View>
        )
    }
}


export default Header;