/**Page for testing purposes */

import React, { Component } from 'react'
import { Platform, View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Button } from 'react-native';
import { connect } from 'react-redux';

class TestScreen extends Component {

    state = { count: 0 }

    increment = () => {
        this.setState({
            count : this.state.count +1            
        })
    }

    decrement = () => {
        this.setState({
            count : this.state.count -1            
        })
    }


    // mapStateToProps(state) {
    //     return {
    //       count: state.count
    //     };
    //   }

    render() {
        const { count } = this.state;

        return (
            <View>
                <Button onPress={this.decrement} title="-"></Button>
                <Text>{count}</Text>
                <Button onPress={this.increment} title="+"></Button>
                
                
            </View>
        )
    }
}
//export default connect(mapStateToProps)(TestScreen);

export default TestScreen;

