import  React, { Component } from 'react';
import { Platform, View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator} from 'react-native';

export default class userDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    componentDidMount() {
        this.setState({
            user: this.props.navigation.state.params.user
        });
    }
    
    render(){
        if (this.state.user === null) {
            return (
                <ActivityIndicator />
            );
        } else {
            return (
                <View style={[styles.container, this.state.user.gender == 'female' ? styles.female : styles.male]}>
                    <Image
                        source={{ uri : this.state.user.picture.large }}
                        style={styles.itemImage}
                    />
                    <Text style={styles.itemText}>
                        Name: {this.state.user.name.first+' '+this.state.user.name.last}
                    </Text>
                    <Text style={styles.itemText}>
                        Country: {this.state.user.location.country}
                    </Text>
                    <Text style={styles.itemText}>
                        E-mail: {this.state.user.email}
                    </Text>
                </View>
            );
        }
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        //backgroundColor:'blue',
    },
    itemImage:{
        height:90,
        width:90,
        borderRadius:45,
        marginVertical:10,
        
    },
    itemText:{
        fontSize:18,
        textAlign:'center',
        marginVertical:10,
        color:'white'
    },
    male: {
        backgroundColor: 'green'
    },
    female: {
        backgroundColor: 'brown'
    },
});