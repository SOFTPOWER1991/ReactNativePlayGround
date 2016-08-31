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
  View,
  Image
} from 'react-native';

var Dimensions = require('Dimensions');

var screenWidth = Dimensions.get('window').width; 

var screenHeight = Dimensions.get('window').height;

class flexdemo1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style = {styles.topView}>

            <Image 
               source={require('./images/login/login_large.ic.png')}
               style = {styles.loginLargeImg}
            />
        </View>

        <View style = {styles.bottomView}>
            

            <View style = {[styles.telephonLoginView , styles.base]}>
                
                <Text style = {styles.fontStyleLogin}>
                    手机号登陆
                </Text>
             
            </View>

            <View style = {[styles.registerView , styles.base]}>

                <Text style = {styles.fontStyleRegister}>
                    立即注册
                </Text>
                 
            </View>

            <View style = {styles.loginByOtherContianer}>
                
                <View style = {{flexDirection:'row',alignItems: 'center'}}>
                   <View style={styles.loginByOtherLine}></View>
                   <Text style={styles.otherLoginHintLabel}>其他方式登录</Text>
                  <View style={styles.loginByOtherLine}></View>

                </View>

                 
                <View style={styles.socialLoginBtnContianer}>
                    <Image source={require('./images/login/ic_qq_login_normal.png')}
                           style={styles.socialLoginBtnStyle}/>
                    <Image source={require('./images/login/ic_weibo_login_normal.png')}
                           style={styles.socialLoginBtnStyle}/>
                    <Image source={require('./images/login/ic_weixin_login_normal.png')}
                           style={styles.socialLoginBtnStyle}/>
                    <Image source={require('./images/login/ic_tencent_login_normal.png')}
                           style={styles.socialLoginBtnStyle}/>
                    <Image source={require('./images/login/ic_renren_login_normal.png')}
                           style={styles.socialLoginBtnStyle}/>
                </View>

                 
            </View>
        
        </View>
       
      </View>

    );
  }
}

const styles = StyleSheet.create({

  otherLoginImg:{

  },

   //其他登录方式的容器
    loginByOtherContianer:{
        width:screenWidth,
        position:'absolute',
        bottom:20,
        alignItems:'center',
        justifyContent:'center'
    },

    //横线
    loginByOtherLine:{
        backgroundColor:'#999999',
        height:1,
        width:screenWidth*0.25,
        marginLeft:10,
        marginRight:10
    },

   //第三方登录按钮容器
    socialLoginBtnContianer:{
        flexDirection:'row',
        marginTop:10
    },


  //第三方登录按钮的样式
  socialLoginBtnStyle:{
        width:40,
        height:40,
        margin:5
    },

  otherLoginTitleLine:{
        backgroundColor:'#999999',
        height:1,
        width:screenWidth*0.25,
        marginLeft:10,
        marginRight:10
  },

  otherLiginTitleLabel:{
        color: '#505050',
        fontSize:13
  },

  otherLoginTitle:{
    flexDirection: 'row',
    alignItems: 'center'
  },

  fontStyleLogin:{
    fontSize: 16,
    color: 'white'
  },

  fontStyleRegister:{
    fontSize: 16,
    color: 'red'
  },
  container:{
    flex: 1,
    backgroundColor: 'rgb(247 , 247 , 247)'
  },

  topView: {
    flex: 3,
    backgroundColor: 'rgb(247 , 247 , 247)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  bottomView: {
    flex: 2,
    backgroundColor: 'rgb(247 , 247 , 247)',
    alignItems:'center'
  },

  loginLargeImg:{
    width: screenWidth/2,
    height: screenWidth/2
  },

  telephonLoginView:{
    backgroundColor: 'red',
    width: screenWidth * 0.5,
    height: 35,
    borderRadius: 5
  },

  registerView:{
    backgroundColor: 'rgb(247 , 247 , 247)',
    width: screenWidth * 0.5,
    height: 35,
    marginTop: 20,
     borderRadius: 5,
     borderWidth  : 1,
     borderColor : 'red'
  },

  base:{
    justifyContent: 'center',
    alignItems: 'center'
  },

  otherLoginView:{
        width:screenWidth,
        position:'absolute',
        bottom:0,
        alignItems:'center',
        justifyContent:'center'
  }


});

AppRegistry.registerComponent('flexdemo1', () => flexdemo1);
