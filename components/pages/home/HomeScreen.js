import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Pressable,
  Image,
  ScrollView,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const CollapsibleItem = ({ item, isOpen, toggleCollapse }) => {
  const [animation] = useState(new Animated.Value(isOpen ? 1 : 0));

  const animatedStyle = {
    height: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [isOpen ? 150 : 0, isOpen ? 0 : 150],
    }),
  };

  return (
    <View className="m-4">
      <Pressable className="min-w-full" onPress={toggleCollapse}>
        <View className="bg-white rounded-t-xl">
          <View className="flex justify-between p-4 items-center">
            <View className="flex-row">
              {/* Add Image Here */}
              <View>
                <Text className="font-semibold">Tuscan Beans with Sausage</Text>
                <Text className="text-gray-400">Breakfast</Text>
              </View>
            </View>
            <View>
              {isOpen ? (
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/up.png")}
                />
              ) : (
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/down.png")}
                />
              )}
            </View>
          </View>
        </View>
      </Pressable>
      <Animated.View style={[`overflow-hidden`, animatedStyle]}>
        {isOpen && (
          <View className="bg-white rounded-b-xl">
            <View className="bg-gray-200">
              <View className="h-0.5 bg-gray-200" />
            </View>
            <View className="flex justify-between p-4">
              <View className="items-center text-center">
                <Text className="text-sm">Calories</Text>
                <Text className="font-semibold text-sm">1440 KKal</Text>
              </View>
              <View className="items-center text-center">
                <Text className="text-sm">Protein</Text>
                <Text className="font-semibold text-sm">60g</Text>
              </View>
              <View className="items-center text-center">
                <Text className="text-sm">Carb</Text>
                <Text className="font-semibold text-sm">70g</Text>
              </View>
              <View className="items-center text-center">
                <Text className="text-sm">Fat</Text>
                <Text className="font-semibold text-sm">35g</Text>
              </View>
            </View>
          </View>
        )}
      </Animated.View>
    </View>
  );
};

const CollapsibleList = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <View>
      {data.map((item, index) => (
        <CollapsibleItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          toggleCollapse={() => toggleCollapse(index)}
        />
      ))}
    </View>
  );
};

export default function HomeScreen({ navigation }) {
  const [collapsed, setCollapsed] = useState(true);
  const [animation] = useState(new Animated.Value(0));

  const subs = (24 / 26) * 100;
  const calories = (1200 / 1800) * 100;
  const protein = (80 / 120) * 100;
  const fat = (15 / 18) * 100;
  const carbs = (120 / 150) * 100;

  const toggleCollapse = () => {
    Animated.timing(animation, {
      toValue: collapsed ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setCollapsed(!collapsed);
  };

  const animatedStyle = {
    height: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [150, 0],
    }),
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View className="px-4 pt-4 bg-gray-50 min-h-full">
        <View className="bg-white rounded-xl">
          <View
            className="p-4 flex justify-between"
            style={{ flexDirection: "row" }}
          >
            <View>
              <Text className="font-semibold text-sm">
                The food has been dispatch🚚
              </Text>
              <Text className="text-sm pt-1 text-gray-500">
                Monday, 8 AM to 6 PM
              </Text>
            </View>
            <View className="bg-red-100 rounded-full justify-center">
              <Text className="px-3 py-2 text-red-500 font-semibold">
                On Delivery
              </Text>
            </View>
          </View>
        </View>
        <View className="pt-3">
          <View className="bg-white rounded-t-xl border-b border-gray-200">
            <View
              className="p-4 flex justify-between"
              style={{ flexDirection: "row" }}
            >
              <View>
                <Text className="font-semibold text-base">Meals Package</Text>
              </View>
              <Pressable>
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/information.png")}
                />
              </Pressable>
            </View>
          </View>
          <View className="bg-white rounded-b-xl">
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
            <View className="px-4">
              <LinearGradient
                className="h-2"
                start={[0, 1]}
                end={[1, 0]}
                colors={["#FF5F00", "#E712DE"]}
                style={{ width: `${subs}%`, borderRadius: 9999 }}
              />
              <View
                className="-z-10"
                style={{
                  position: "absolute",
                  bottom: -0.8,
                  left: 13,
                  width: "100%",
                }}
              >
                <View className="h-2 rounded-full bg-gray-200"></View>
              </View>
            </View>
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
          <View
            className="py-4 flex justify-between"
            style={{ flexDirection: "row" }}
          >
            <View>
              <Text className="font-semibold text-base">
                Nutritions Tracker
              </Text>
            </View>
            <Pressable>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../../assets/information.png")}
              />
            </Pressable>
          </View>

          <View className="bg-white rounded-xl">
            <View
              className="p-3 flex justify-between"
              style={{ flexDirection: "row" }}
            >
              <View className="content-center justify-center p-3">
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require("../../../assets/calories.png")}
                />
                <View className="pt-2.5">
                  <Text className="font-semibold text-sm text-center">
                    Calories
                  </Text>
                  <Text className="text-gray-400 text-sm text-center">
                    1800
                  </Text>
                  <View className="pt-2.5">
                    <View
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${calories}%` }}
                    />
                    <View className="items-center">
                      <View
                        style={{ width: `${calories}%`, borderRadius: 9999 }}
                      />
                      <View
                        className="-z-10"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          width: "100%",
                        }}
                      >
                        <View className="h-2 rounded-full bg-gray-200"></View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View className="content-center justify-center p-3">
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require("../../../assets/protein.png")}
                />
                <View className="pt-2.5">
                  <Text className="font-semibold text-sm text-center">
                    Protein
                  </Text>
                  <Text className="text-gray-400 text-sm text-center">
                    120g
                  </Text>
                  <View>
                    <View className="pt-2.5">
                      <View
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: `${protein}%` }}
                      />
                      <View className="items-center">
                        <View
                          style={{ width: `${protein}%`, borderRadius: 9999 }}
                        />
                        <View
                          className="-z-10"
                          style={{
                            position: "absolute",
                            bottom: 0,
                            width: "100%",
                          }}
                        >
                          <View className="h-2 rounded-full bg-gray-200"></View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View className="content-center justify-center p-3">
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require("../../../assets/fat.png")}
                />
                <View className="pt-2.5">
                  <Text className="font-semibold text-sm text-center">Fat</Text>
                  <Text className="text-gray-400 text-sm text-center">18g</Text>
                  <View>
                    <View className="pt-2.5">
                      <View
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{ width: `${fat}%` }}
                      />
                      <View className="items-center">
                        <View
                          style={{ width: `${fat}%`, borderRadius: 9999 }}
                        />
                        <View
                          className="-z-10"
                          style={{
                            position: "absolute",
                            bottom: 0,
                            width: "100%",
                          }}
                        >
                          <View className="h-2 rounded-full bg-gray-200"></View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View className="content-center justify-center p-3">
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require("../../../assets/carbs.png")}
                />
                <View className="pt-2.5">
                  <Text className="font-semibold text-sm text-center">
                    Carbs
                  </Text>
                  <Text className="text-gray-400 text-sm text-center">
                    150g
                  </Text>
                  <View>
                    <View className="pt-2.5">
                      <View
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${carbs}%` }}
                      />
                      <View className="items-center">
                        <View
                          style={{ width: `${carbs}%`, borderRadius: 9999 }}
                        />
                        <View
                          className="-z-10"
                          style={{
                            position: "absolute",
                            bottom: 0,
                            width: "100%",
                          }}
                        >
                          <View className="h-2 rounded-full bg-gray-200"></View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View
            className="py-4 flex justify-between"
            style={{ flexDirection: "row" }}
          >
            <View>
              <Text className="font-semibold text-base">Today's Menu</Text>
              <View className="pt-4">
                <Pressable className="min-w-full" onPress={toggleCollapse}>
                  {collapsed ? (
                    <View className="bg-white rounded-t-xl">
                      <View
                        className="flex justify-between p-4 items-center"
                        style={{ flexDirection: "row" }}
                      >
                        <View style={{ flexDirection: "row" }}>
                          {/* Add Image Here */}
                          <View>
                            <Text className="font-semibold">
                              Tuscan Beans with Sausage
                            </Text>
                            <Text className="text-gray-400">Breakfast</Text>
                          </View>
                        </View>
                        <View>
                          {collapsed ? (
                            <Image
                              style={{ width: 20, height: 20 }}
                              source={require("../../../assets/up.png")}
                            />
                          ) : (
                            <Image
                              style={{ width: 20, height: 20 }}
                              source={require("../../../assets/down.png")}
                            />
                          )}
                        </View>
                      </View>
                    </View>
                  ) : (
                    <View className="bg-white rounded-xl">
                      <View
                        className="flex justify-between p-4 items-center"
                        style={{ flexDirection: "row" }}
                      >
                        <View style={{ flexDirection: "row" }}>
                          {/* Add Image Here */}
                          <View>
                            <Text className="font-semibold">
                              Tuscan Beans with Sausage
                            </Text>
                            <Text className="text-gray-400">Breakfast</Text>
                          </View>
                        </View>
                        <View>
                          {collapsed ? (
                            <Image
                              style={{ width: 20, height: 20 }}
                              source={require("../../../assets/up.png")}
                            />
                          ) : (
                            <Image
                              style={{ width: 20, height: 20 }}
                              source={require("../../../assets/down.png")}
                            />
                          )}
                        </View>
                      </View>
                    </View>
                  )}
                </Pressable>
                <Animated.View style={[`overflow-hidden`, animatedStyle]}>
                  {collapsed && (
                    <View className="bg-white rounded-b-xl">
                      <View className="bg-gray-200">
                        <View className="h-0.5 bg-gray-200" />
                      </View>
                      <View
                        className="flex justify-between p-4"
                        style={{ flexDirection: "row" }}
                      >
                        <View className="items-center text-center">
                          <Text className="text-sm">Calories</Text>
                          <Text className="font-semibold text-sm">
                            1440 Kcal
                          </Text>
                        </View>
                        <View className="items-center text-center">
                          <Text className="text-sm">Protein</Text>
                          <Text className="font-semibold text-sm">60g</Text>
                        </View>
                        <View className="items-center text-center">
                          <Text className="text-sm">Carb</Text>
                          <Text className="font-semibold text-sm">70g</Text>
                        </View>
                        <View className="items-center text-center">
                          <Text className="text-sm">Fat</Text>
                          <Text className="font-semibold text-sm">35g</Text>
                        </View>
                      </View>
                    </View>
                  )}
                </Animated.View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
