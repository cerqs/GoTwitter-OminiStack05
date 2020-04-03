import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();


import Login from './pages/Login';
import New from './pages/New';
import Timeline from './pages/Timeline';


export default function Routes() {
    return(
        <NavigationContainer >
            <AppStack.Navigator screenOptions = {{ headerShown: false }}>
                <AppStack.Screen name = "Login" component = { Login }/>
                <AppStack.Screen name = "Timeline" component = { Timeline }/>
                <AppStack.Screen name = "New" component = { New }/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}