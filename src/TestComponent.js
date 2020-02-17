import React from 'react';
// import { Button, ThemeProvider, Text} from react-native-elements
import {Text, ActivityIndicator, View, TouchableOpacity} from 'react-native';
import { ThemeConsumer } from 'react-native-elements';

export default class TestComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            numero:1
        };

        //bind actions
        this.onPress =this.onPress.bind(this);
    }

    /**Cuando se va a montar el componente */
    componentWillMount(){
        console.log("Se montara el componente")
    }
    
    /**Cuando el componente ya esta montado */
    componentDidMount(){
        console.log("Componente montado")
    }

    /**Cuando el componente se va a desmontar */
    // componentWillUnmount(){
    //     console.log("Se desmontara el componente")

    // }

    onPress(){
        this.setState({
            numero: (this.state.numero +1)
        });
    }

    render(){
        console.log("Paso por el render");
        return(
            <TouchableOpacity
                onPress={this.onPress}
            >
            <Text>Mi numero es {this.state.numero}</Text>
            </TouchableOpacity>
        );
        
    }

}

