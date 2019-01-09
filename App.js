
import React, { Component } from 'react';
import { AppRegister, StyleSheet, Text, View, ImageBackground } from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        justifyContent: 'center',
    },
    loginForm: {
        backgroundColor: 'transparent',
        alignItems: 'center',
    },

    text: {
       fontSize: 30,
       fontWeight: 'bold',
    }
});

export default class adasmokeshop extends Component {
    render () {
    return (
        <View style = { styles.container}>
             <ImageBackground source = {{uri: 'https://smokefreecasinos.org/wp-content/uploads/2018/04/smoke-69124_1280.jpg'}} style={styles.backgroundImage}>
                <View style = { styles.loginForm }>
                     <Text style =  {styles.text }>Ada Smoke Shop</Text>
                </View>
             </ImageBackground>
        </View>
    );
    }
}
