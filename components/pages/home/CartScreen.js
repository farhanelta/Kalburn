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
    <View className="justify-center items-center min-h-full min-w-full bg-gray-50">
      <View className="justify-center items-center">
        <View>
          <Image
            style={{ width: 250, height: 171 }}
            source={require("../../../assets/empty_cart.png")}
          />
          <Text className="text-center font-bold text-lg">Your cart is empty</Text>
        </View>
      </View>
    </View>
  );
}
