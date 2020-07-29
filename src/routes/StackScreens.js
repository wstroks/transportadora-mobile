import React from 'react';
import { Text, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login/index';
import Register from '../screens/Register/index';
import RegisterCompany from '../screens/RegisterCompany/index';

const RootStack = createStackNavigator();

export default function StackScreens(){
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="login" component={Login} />
            <RootStack.Screen name="register" component={Register} />
            <RootStack.Screen name="register-company" component={RegisterCompany} />
          
        </RootStack.Navigator>
    );
}