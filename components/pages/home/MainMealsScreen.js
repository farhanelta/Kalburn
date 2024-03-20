import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MealsScreen from "./MealsScreen";
import MealsDetails from "./MealsDetails";

const Stack = createNativeStackNavigator();

export default function MainMealsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MealsScreen"
        component={MealsScreen}
        options={{ headerShown: false,  }}
      />
      <Stack.Screen
        name="MealsDetails"
        component={MealsDetails}
        options={{ headerShown: false, headerMode: 'none' }}
      />
    </Stack.Navigator>
  );
}
