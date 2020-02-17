import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    FlatList
} from 'react-native';

import UserService from '../services/UserService';


export default class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
            , isLoading: true
        };

    }

    componentDidMount() {
        UserService.getUsers()
            .then((results) => {
                if (results && results.data && results.data.results) {
                    this.setState({
                        users: results.data.results
                        , isLoading: false
                    })
                }
            })
            .catch((err) => {
                console.log("Err", err)
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator />
            );
        } else {
            const { users } = this.state;
            console.log(users);
            return (
                <View>
                    <Text> There's {users.length} users</Text>
                    <FlatList
                        data={users}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity 
                                    onPress={ () => { 
                                        this.props.navigation.navigate('userDetails', { user : item }); 
                                        }
                                    }
                                    style={[styles.itemContainer, item.gender == 'female' ? styles.female : styles.male]}
                                >
                                    <Image
                                        source={{ uri: item.picture.thumbnail }}
                                        style={styles.itemImage}
                                    />
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.itemTitle}>
                                        {item.name.first} {item.name.last}
                                        </Text>
                                        <Text style={[styles.itemTitle, {fontSize:13 }]}>Tap for more details</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={item => item.login.uuid}
                    >
                    </FlatList>
                </View>
            );
        }
    }

}

var styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        marginBottom:1,

    },
    itemTitle: {
        fontSize: 18,
        color: 'white',
        //flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        textAlignVertical: 'center',
        textAlign: 'left'

        //  backgroundColor: 'blue'

    },
    itemImage: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    male: {
        backgroundColor: 'green'
    },
    female: {
        backgroundColor: 'brown'
    },
});