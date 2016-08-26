
'use strict';

import React from 'react';
import {
    StyleSheet
} from 'react-native';



// my styles , StyleSheet.create
const myStyles = StyleSheet.create({
    myTextStyles: {
        width: 200,
        height: 300,
        fontSize: 20,
        backgroundColor: '#BBBBBB',
        color: 'green',
        marginTop: 10,
        padding: 20
    },
    myTextStyles2: {
        width: 200,
        height: 200,
        fontSize: 20,
        backgroundColor: 'yellow',
        color: 'green',
        marginTop: 10,
        padding: 20
    },
    myTextFonts: {
        fontSize: 15
    },
    myTextColor: {
        color: '#000000'
    },
    myTextBg: {
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


module.exports = myStyles;