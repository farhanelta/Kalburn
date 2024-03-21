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

export default function ProfileScreen({ navigation }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      className="bg-gray-50 min-h-full"
    >
      <View>
        <View className="py-4">
          <Pressable>
            <View className="min-w-full bg-white">
              <View className="py-4 px-7" style={{ flexDirection: "row" }}>
                <View className="items-center" style={{ flexDirection: "row" }}>
                  <View className="bg-orange-100 rounded-full">
                    <Text className="px-5 py-4 text-orange-500 font-bold">
                      N
                    </Text>
                  </View>
                  <View className="pl-3">
                    <Text className="font-semibold text-xl">
                      Alejandro Maryuandi
                    </Text>
                    <Text className="text-gray-400">View Profile</Text>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
        <Pressable>
          <View className="p-4">
            <View className="bg-white rounded-xl">
              <View className="p-4">
                <View className="border-b border-gray-300 pb-4">
                  <View style={{ flexDirection: "row" }}>
                    <Text>My Package</Text>
                  </View>
                </View>
                <View className="pt-4">
                  <View className="border-b border-gray-300 pb-4">
                    <View
                      className="flex justify-between"
                      style={{ flexDirection: "row" }}
                    >
                      <View
                        className="items-center"
                        style={{ flexDirection: "row" }}
                      >
                        <View className="bg-orange-100 rounded-xl">
                          <Text className="px-3.5 py-5 text-orange-500 font-bold">
                            100g
                          </Text>
                        </View>
                        <View className="pl-3">
                          <Text className="font-semibold">Kickstart</Text>
                          <Text className="text-gray-400">
                            Weight Loss Program
                          </Text>
                        </View>
                      </View>
                      <View>
                        <Text></Text>
                      </View>
                    </View>
                  </View>

                  <View
                    className="p-4 flex justify-between"
                    style={{ flexDirection: "row" }}
                  >
                    <View>
                      <Text className="font-medium text-base">Active Days</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text className="font-semibold">24</Text>
                      <Text className="font-semibold">/</Text>
                      <Text className="text-gray-500 font-semibold">26</Text>
                    </View>
                  </View>
                  <View>{/* Add Chart Here */}</View>
                  <View
                    className="px-4 pb-3 pt-4 flex justify-between"
                    style={{ flexDirection: "row" }}
                  >
                    <View
                      className="flex justify-between"
                      style={{ flexDirection: "row" }}
                    >
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={require("../../../assets/meals-logo.png")}
                      />
                      <View className="pl-2" style={{ flexDirection: "row" }}>
                        <Text className="font-semibold">2x</Text>
                        <Text className="text-gray-500 pl-1">Meals</Text>
                      </View>
                    </View>
                    <View
                      className="flex justify-between"
                      style={{ flexDirection: "row" }}
                    >
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={require("../../../assets/snack-logo.png")}
                      />
                      <View className="pl-2" style={{ flexDirection: "row" }}>
                        <Text className="font-semibold">1x</Text>
                        <Text className="text-gray-500 pl-1">Snacks</Text>
                      </View>
                    </View>
                    <View
                      className="flex justify-between"
                      style={{ flexDirection: "row" }}
                    >
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={require("../../../assets/drinks-logo.png")}
                      />
                      <View className="pl-2" style={{ flexDirection: "row" }}>
                        <Text className="font-semibold">2x</Text>
                        <Text className="text-gray-500 pl-1">Drinks</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View className="bg-gray-50 rounded-full">
                  <View className="py-2">
                    <View
                      className="justify-center"
                      style={{ flexDirection: "row" }}
                    >
                      <Text className="text-gray-500">
                        Your Package Expires in
                      </Text>
                      <Text className="text-orange-500 pl-1">7 Days</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Pressable>
        <View className="min-w-full bg-white">
          <View className="p-4">
            <Pressable className="pb-6">
              <View
                className="border-b border-gray-300"
                style={{ flexDirection: "row" }}
              >
                <View
                  className="items-center pb-7"
                  style={{ flexDirection: "row" }}
                >
                  <Text>❤</Text>
                  <View className="pl-3">
                    <Text className="font-semibold text-xl">Favorites</Text>
                  </View>
                </View>
              </View>
            </Pressable>
            <Pressable className="pb-6">
              <View
                className="border-b border-gray-300"
                style={{ flexDirection: "row" }}
              >
                <View
                  className="items-center pb-7"
                  style={{ flexDirection: "row" }}
                >
                  <Text>❤</Text>
                  <View className="pl-3">
                    <Text className="font-semibold text-xl">Favorites</Text>
                  </View>
                </View>
              </View>
            </Pressable>
            <Pressable className="pb-6">
              <View
                className="border-b border-gray-300"
                style={{ flexDirection: "row" }}
              >
                <View
                  className="items-center pb-7"
                  style={{ flexDirection: "row" }}
                >
                  <Text>❤</Text>
                  <View className="pl-3">
                    <Text className="font-semibold text-xl">Favorites</Text>
                  </View>
                </View>
              </View>
            </Pressable>
            <Pressable className="pb-6">
              <View
                className="border-b border-gray-300"
                style={{ flexDirection: "row" }}
              >
                <View
                  className="items-center pb-7"
                  style={{ flexDirection: "row" }}
                >
                  <Text>❤</Text>
                  <View className="pl-3">
                    <Text className="font-semibold text-xl">Favorites</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
