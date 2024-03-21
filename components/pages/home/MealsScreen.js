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

export default function MealsScreen({ navigation }) {
  return (
    <ScrollView className="bg-gray-50 min-h-full">
      <View className="px-4 pt-4">
        <Pressable onPress={() => navigation.navigate("Details")}>
          <View className="p-3 bg-white rounded-xl">
            <View className="h-[171px] w-[337px] bg-gray-500 rounded-lg"></View>
            <View className="pt-3">
              <View style={{ flexDirection: "row" }}>
                <View className="pr-1.5">
                  <View className="bg-green-500 rounded-full">
                    <View
                      style={{ flexDirection: "row" }}
                      className="py-1.5 px-2.5 items-center"
                    >
                      <Image
                        style={{ width: 12, height: 12 }}
                        source={require("../../../assets/vegan.png")}
                      />
                      <Text className="font-semibold text-white text-xs pl-1">
                        Vegan Friendly
                      </Text>
                    </View>
                  </View>
                </View>
                <View className="pr-1.5">
                  <View className="bg-red-500 rounded-full">
                    <View
                      style={{ flexDirection: "row" }}
                      className="py-1.5 px-2.5 items-center"
                    >
                      <Image
                        style={{ width: 12, height: 12 }}
                        source={require("../../../assets/alert.png")}
                      />
                      <Text className="font-semibold text-white text-xs pl-1">
                        Gluten
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View className="pt-3">
              <Text className="text-base font-semibold">
                Tuscan Beans with Sausage
              </Text>
              <Text className="text-base text-gray-500 pt-1.5">
                Tuscan Beans with Sausage is a hearty, flavorful stew typically
                made with cannellini beans, Italian s...
              </Text>
            </View>
            <View className="pt-3">
              <View
                className="flex justify-between"
                style={{ flexDirection: "row" }}
              >
                <View className="items-center" style={{ flexDirection: "row" }}>
                  <Image
                    style={{ width: 11, height: 11 }}
                    source={require("../../../assets/calories-gray.png")}
                  />
                  <Text className="text-sm pl-1 text-gray-600">1400 Kcal</Text>
                </View>
                <View className="items-center" style={{ flexDirection: "row" }}>
                  <Image
                    style={{ width: 11, height: 11 }}
                    source={require("../../../assets/protein-gray.png")}
                  />
                  <Text className="text-sm pl-1 text-gray-600">35 Gr</Text>
                </View>
                <View className="items-center" style={{ flexDirection: "row" }}>
                  <Image
                    style={{ width: 11, height: 11 }}
                    source={require("../../../assets/fat-gray.png")}
                  />
                  <Text className="text-sm pl-1 text-gray-600">12 Gr</Text>
                </View>
                <View className="items-center" style={{ flexDirection: "row" }}>
                  <Image
                    style={{ width: 11, height: 11 }}
                    source={require("../../../assets/carbs-gray.png")}
                  />
                  <Text className="text-sm pl-1 text-gray-600">80 Gr</Text>
                </View>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
}
