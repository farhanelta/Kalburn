import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Pressable, StyleSheet, Text, View } from "react-native";
import SignUp from "./components/pages/signup/SignUpScreen";
import MainHome from "./components/pages/home/MainHomeScreen";
import MealsDetails from "./components/pages/home/MealsDetails";
import Cart from "./components/pages/home/CartScreen";
import Result from "./components/pages/home/ResultScreen";
import "./global.css";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainHome"
          component={MainHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={MealsDetails}
          options={{ headerShown: false, headerMode: "none" }}
        />
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
        <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
