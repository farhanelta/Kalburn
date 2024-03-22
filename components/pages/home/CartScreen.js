import React from "react";
import {
  View,
  TextInput,
  Text,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cart({ navigation }) {
  return (
    <SafeAreaView>
      <View className="min-h-full min-w-full bg-gray-50">
        <View className="border-b border-gray-300">
          <View
            className="py-4 px-4 items-center flex justify-between"
            style={{ flexDirection: "row" }}
          >
            <Pressable onPress={() => navigation.goBack()}>
              <View className="pl-3">
                <Image
                  style={{ width: 14, height: 14 }}
                  source={require("../../../assets/cross.png")}
                />
              </View>
            </Pressable>
            <Text className="font-semibold text-xl">Your Cart</Text>
            <Pressable className="border border-gray-300 rounded-lg">
              <View className="px-3 py-5">
                <Image
                  style={{ width: 15, height: 3 }}
                  source={require("../../../assets/more.png")}
                />
              </View>
            </Pressable>
          </View>
        </View>
        <View className="justify-center items-center ">
          <Image
            style={{ width: 250, height: 171 }}
            source={require("../../../assets/empty_cart.png")}
          />
          <Text className="text-center font-bold text-lg">
            Your cart is empty
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
