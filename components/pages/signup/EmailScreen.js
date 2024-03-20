import React from "react";
import { View, TextInput, Text, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';

export default function EmailScreen({ navigation }) {
  return (
    <SafeAreaView className="bg-white">
      <View className="px-4 bg-white h-full">
        <Pressable className="pt-4 pl-2" onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <View className="pt-4">
          <Text className="text-2xl text-black font-semibold">
            Let's get started
          </Text>
          <Text className="pt-1.5 text-gray-500 text-base">
            Join Now to Customize Your Meal Plans & Seamlessly Manage Your
            Health Journey
          </Text>
        </View>
        <View className="pt-6">
          <Text className="pb-3 text-gray-500">Email</Text>
          <TextInput
            placeholder="Enter Email Address"
            className="border border-gray-400 text-lg text-black rounded-lg py-2.5 px-3"
          />
        </View>
        <View className="pt-2.5" style={{ flexDirection: "row" }}>
          <Text className="font-medium text-gray-400">Already a member? </Text>
          <Pressable>
            <Text className="text-orange-500 font-bold">Login Here</Text>
          </Pressable>
        </View>
        <View className="absolute inset-x-4 bottom-2.5">
          <Pressable
            className="bg-orange-500 rounded-full text-sm py-4"
            onPress={() => navigation.navigate("Password")}
          >
            <Text className="text-white text-center">Continue</Text>
          </Pressable>
          <View className="pt-4">
            <View className="justify-center" style={{ flexDirection: "row" }}>
              <Text className="text-gray-500">
                By signing up you agree to the{" "}
              </Text>
              <Pressable>
                <Text className="text-orange-500">Terms of Use</Text>
              </Pressable>
            </View>
            <View className="justify-center" style={{ flexDirection: "row" }}>
              <Text className="text-gray-500">and </Text>
              <Pressable>
                <Text className="text-orange-500">Privacy Policy</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
