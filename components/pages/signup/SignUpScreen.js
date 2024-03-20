import React from "react";
import PasswordScreen from "./PasswordScreen";
import GoalScreen from "./GoalScreen";
import GenderScreen from "./GenderScreen";
import EmailScreen from "./EmailScreen";
import BodyScreen from "./BodyScreen";
import AgeScreen from "./AgeScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function SignUp() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Email"
        component={EmailScreen}
        options={{ headerShown: false, animation: "none" }}
      />
      <Stack.Screen
        name="Password"
        component={PasswordScreen}
        options={{ headerShown: false, animation: "none" }}
      />
      <Stack.Screen
        name="Age"
        component={AgeScreen}
        options={{ headerShown: false, animation: "none" }}
      />
      <Stack.Screen
        name="Body"
        component={BodyScreen}
        options={{ headerShown: false, animation: "none" }}
      />
      <Stack.Screen
        name="Gender"
        component={GenderScreen}
        options={{ headerShown: false, animation: "none" }}
      />
      <Stack.Screen
        name="Goals"
        component={GoalScreen}
        options={{ headerShown: false, animation: "none" }}
      />
    </Stack.Navigator>
  );
}
