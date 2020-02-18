import React, { Component } from 'react';
import {
    Platform,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ActivityIndicator,
    TextInput,
    ImageBackground,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

//local Imports

import backgroundImage from '../images/wallpaper.png'

export default class HomeScreen extends React.Component {
    _onPress = () => {
        alert('Iniciar Sesion')
    }

    _seeList =  () =>{
        this.props.navigation.navigate('userList');
    }

    render() {
        return (
           <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>

            <View style={styles.container}>
                <ImageBackground style={styles.container} source={backgroundImage}>
                        <View style={styles.form}>
                            <TextInput
                                autoCorrect={false}
                                autoFocus={true}
                                style={styles.input}
                                placeholder="LOGIN"
                            />
                            <TextInput
                                autoCorrect={false}
                                style={styles.input}
                                placeholder="PASSWORD"
                                secureTextEntry={true}
                            />

                            <TouchableOpacity
                                style={styles.button}
                                onPress={this._seeList}
                                activeOpacity={1}>
                                <Text style={styles.text}>LOGIN</Text>
                            </TouchableOpacity>
                           
                        </View>
                </ImageBackground>
            </View>
            </TouchableWithoutFeedback>
        )
            ;
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        //backgroundColor:'blue',
    },
    input: {
        borderColor: 'white',
        borderWidth: 1,
        height: 50,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius: 25,


    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 50,
        width: '80%',
        borderRadius: 12,
        zIndex: 100,
        marginTop: 20,
        
    },
    form: {
        // backgroundColor: 'blue',
        height: '50%',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        top: -70,
    }

})
