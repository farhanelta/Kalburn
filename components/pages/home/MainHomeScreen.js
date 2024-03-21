import React from "react";
import { Image, Pressable, View, Text, ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for the icons

import MealsScreen from "./MealsScreen";
import ProfileScreen from "./ProfileScreen";
import WorkoutScreen from "./WorkoutScreen";
import HomeScreen from "./HomeScreen";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function LogoTitle() {
  const navigation = useNavigation()
  return (
    <View
      className="min-w-full items-center flex justify-between"
      style={{ flexDirection: "row" }}
    >
      <Image
        style={{ width: 108, height: 28 }}
        source={require("../../../assets/Kalburn-Logo.png")}
      />
      <Pressable className="border border-gray-200 rounded-lg p-2.5" onPress={() => navigation.navigate("Cart")}>
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../../../assets/shopping-bag.png")}
        />
      </Pressable>
    </View>
  );
}

function MealsTitle({ navigation }) {
  return (
    <View>
      <View
        className="min-w-full items-center flex justify-between"
        style={{ flexDirection: "row" }}
      >
        <Text></Text>
        <Text className="text-xl font-semibold">Meals Menu</Text>
        <Text></Text>
      </View>
      <View className="pt-5">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className="pr-2.5">
            <Pressable className="border border-gray-200 rounded-full w-[85px]">
              <Text className="py-2 px-3 font-semibold">Breakfast</Text>
            </Pressable>
          </View>
          <View className="pr-2.5">
            <Pressable className="border border-gray-200 rounded-full w-[85px]">
              <Text className="py-2 px-3 text-center font-semibold">Meals</Text>
            </Pressable>
          </View>
          <View className="pr-2.5">
            <Pressable className="border border-gray-200 rounded-full w-[85px]">
              <Text className="py-2 px-3 text-center font-semibold">Soups</Text>
            </Pressable>
          </View>
          <View className="pr-2.5">
            <Pressable className="border border-gray-200 rounded-full w-[85px]">
              <Text className="py-2 px-3 text-center font-semibold">
                Snacks
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

function ProfileTitle({ navigation }) {
  return (
    <View>
      <View
        className="min-w-full items-center flex justify-between"
        style={{ flexDirection: "row" }}
      >
        <Text></Text>
        <Text className="text-xl font-semibold">Meals Menu</Text>
        <Text></Text>
      </View>
    </View>
  );
}

export default function MainHome() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Meals") {
            iconName = focused ? "fast-food" : "fast-food-outline";
          } else if (route.name === "Workout") {
            iconName = focused ? "fitness" : "fitness-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={focused ? "#FB6514" : "#667085"}
            />
          );
        },
        tabBarLabel: ({ focused }) => {
          return (
            <Text
              style={{
                color: focused ? "#FB6514" : "#667085",
                fontWeight: '500',
                fontSize: 12,
                paddingBottom: 13.5,
              }}
            >
              {route.name}
            </Text>
          );
        },
        tabBarStyle: { height: 75, paddingTop: 18.5 },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: { height: 92 },
        }}
      />
      <Tab.Screen
        name="Meals"
        component={MealsScreen}
        options={{
          headerTitle: (props) => <MealsTitle {...props} />,
          headerStyle: { height: 128 },
        }}
      />
      <Tab.Screen
        name="Workout"
        component={WorkoutScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: (props) => <ProfileTitle {...props} />,
          headerStyle: { height: 72 },
        }}
      />
    </Tab.Navigator>
  );
}
