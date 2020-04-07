import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import LinkNewTwitter from './components/LinkNewTwitter';



const AppStack = createStackNavigator();


import Login from './pages/Login';
import New from './pages/New';
import Timeline from './pages/Timeline';


export default function Routes() {
    // screenOptions = {{ headerShown: false }}
    
    return(
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen 
                    name = "Login" 
                    component = { Login } 
                    options={{ headerShown: false }}
                />
                
                <AppStack.Screen 
                    name = "Timeline" 
                    component = { Timeline }
                    options={
                        {
                            headerRight:() => (
                                <LinkNewTwitter/>
                            )
                        }
                    }
                    
                />
                <AppStack.Screen 
                    name = "New" 
                    component = { New } 
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}