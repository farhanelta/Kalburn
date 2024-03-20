import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View } from 'react-native';
import SignUp from './components/pages/signup/SignUpScreen';
import MainHome from './components/pages/home/MainHomeScreen';
import './global.css'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="MainHome" component={MainHome} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}