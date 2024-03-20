import React from "react";
import { View, TextInput, Text, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function BodyScreen({ navigation }) {
  return (
    <SafeAreaView className="bg-white">
      <View className="px-4 bg-white h-full">
        <Pressable className="pt-4 pl-2" onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <View className="pt-4">
          <Text className="text-2xl text-black font-semibold">
            What's your body?
          </Text>
          <Text className="pt-1.5 text-gray-500 text-base">
            Height & weight a crucial role in determining your daily calorie for
            a personalized diet plan
          </Text>
        </View>
        <View className="pt-6">
          <Text className="pb-3 text-gray-500">Your Height</Text>
          <View className="relative">
            <Text className="absolute inset-y-4 min-h-full right-0 pr-4 items-center text-gray-500">
              CM
            </Text>
            <TextInput
              placeholder="Enter Height"
              className="border border-gray-400 text-lg text-black rounded-lg py-2.5 pl-4 pr-14" // increased padding for space
            />
          </View>
          <View className="pt-4">
            <Text className="pb-3 text-gray-500">Your Weight</Text>
            <View className="relative">
              <Text className="absolute inset-y-4 min-h-full right-0 pr-4 items-center text-gray-500">
                KG
              </Text>
              <TextInput
                placeholder="Enter Weight"
                className="border border-gray-400 text-lg text-black rounded-lg py-2.5 pl-4 pr-12" // increased padding for space
              />
            </View>
          </View>
        </View>
        <View className="absolute inset-x-4 bottom-2.5">
          <Pressable
            className="bg-orange-500 rounded-full text-sm py-4"
            onPress={() => navigation.navigate("Gender")}
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
