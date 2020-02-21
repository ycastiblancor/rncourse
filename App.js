import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//pages
import TestScreen from './src/screens/TestScreen'
import HomeScreen from './src/screens/HomeScreen'
import UserList from './src/screens/UserList'
import UserDetails from './src/screens/UserDetails'



const Stack = createStackNavigator();
function reducer(){
     
}
const store = createStore(reducer);


const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="testScreen" component={TestScreen} />
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="userList" component={UserList} />
            <Stack.Screen name="UserDetails" component={UserDetails} />
          </Stack.Navigator>
        </NavigationContainer>

      </Provider>
    </>
  );
};

export default App;