/**
 * Created by zhanggeng on 16/9/6.
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MyScene extends Component {
    static get defaultProps() {
        return {
            title: 'MyScene'
        };
    }

    render() {
        return (
            <View>
                <Text>Hi! My name is {this.props.title}.</Text>
            </View>
        )
    }
}