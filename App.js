
import React, { Component } from 'react';
import { AppRegister, StyleSheet, Text, View, Image } from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style = {styles.container}>
               <View style = {styles.backgroundContainer}>
                  <Image style = {styles.backdrop} source = {require('./images/vape.jpg')} resizeMode = 'cover'/>
               </View>
               <View style = { styles.overlay}>
                    <Image
                        style={styles.logo}
                        source={require('./images/smoke.jpg')}/>
                    <Text style={styles.title}>Ada Smoke Shop</Text>
               </View>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
    },
    backgroundContainer: {
        flex:1,
        position: 'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0
        //width: '100%',
        //height: '100%'
    },
    overlay: {
        opacity: 0.5,
        backgroundColor: '#000000',
        flexDirection: 'column',
        top:100
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        backgroundColor: '#000000',
        top:150,
        left: 50,
        width: 200,
        height: 200
    },
    backdrop: {
    flex:1,

    },
    title: {
        color: '#B03A2E',
        marginTop:150,
        width:300,
        height:300,
        fontSize: 30,
        fontStyle: 'italic',
        fontFamily: 'Baskerville',
        textAlign: 'center',
        opacity: 10
    },

});