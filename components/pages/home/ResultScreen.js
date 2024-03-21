import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Wave } from "react-native-animated-spinkit";
import { SafeAreaView } from "react-native-safe-area-context";

const ResultScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <View className="min-h-full min-w-full items-center justify-center bg-white">
        <Wave size={48} color="#FB6514" />
        <Text className="text-2xl text-center">Calculating Results...</Text>
        <Text className="text-gray-400 text-center px-12 pt-2">
          Setting your goal allows us to tailor your meal plans to your specific
          needs.
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View className="bg-white min-w-full min-h-full">
        <View className="border border-b border-gray-200">
          <Text className="text-center text-xl font-semibold py-6">
            Results
          </Text>
        </View>
        <View className="px-4 py-6">
          <View className="justify-center">
            <Text className="text-center font-medium text-gray-500">
              Total Macro
            </Text>
            <Text className="text-3xl text-center font-semibold py-2">
              1600 - 1800
            </Text>
            <Text className="text-center font-medium text-gray-500">
              Calories / Day
            </Text>
          </View>
          <View className="pt-4">
            <View className="border border-gray-300 rounded-lg">
              <View
                className="p-3 flex justify-between"
                style={{ flexDirection: "row" }}
              >
                <View className="content-center items-center justify-center p-3">
                  <Image
                    style={{ width: 40, height: 40 }}
                    source={require("../../../assets/calories.png")}
                  />
                  <View className="pt-2.5">
                    <Text className="font-semibold text-sm text-center">
                      Calories
                    </Text>
                    <Text className="text-gray-400 text-sm text-center">
                      1600 - 1800
                    </Text>
                  </View>
                </View>
                <View className="content-center items-center justify-center p-3">
                  <Image
                    style={{ width: 40, height: 40 }}
                    source={require("../../../assets/protein.png")}
                  />
                  <View className="pt-2.5">
                    <Text className="font-semibold text-sm text-center">
                      Protein
                    </Text>
                    <Text className="text-gray-400 text-sm text-center">
                      80g - 120g
                    </Text>
                  </View>
                </View>
                <View className="content-center items-center justify-center p-3">
                  <Image
                    style={{ width: 40, height: 40 }}
                    source={require("../../../assets/fat.png")}
                  />
                  <View className="pt-2.5">
                    <Text className="font-semibold text-sm text-center">
                      Fat
                    </Text>
                    <Text className="text-gray-400 text-sm text-center">
                      12g - 18g
                    </Text>
                  </View>
                </View>
                <View className="content-center items-center justify-center p-3">
                  <Image
                    style={{ width: 40, height: 40 }}
                    source={require("../../../assets/carbs.png")}
                  />
                  <View className="pt-2.5">
                    <Text className="font-semibold text-sm text-center">
                      Carbs
                    </Text>
                    <Text className="text-gray-400 text-sm text-center">
                      180g - 150g
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className="min-h-full">
          <LinearGradient className="min-h-full" colors={["#FFF8F3", "#fff"]}>
            <View className="py-6 px-4">
              <View className="bg-white rounded-xl">
                <View className="p-5">
                  <View
                    className="flex justify-between items-center"
                    style={{ flexDirection: "row" }}
                  >
                    <View>
                      <Text className="text-xl font-semibold">Kickstart</Text>
                      <Text className="text-gray-500 text-sm">
                        Weight Loss Program
                      </Text>
                    </View>
                    <View>
                      <Text className="text-gray-500 text-sm">
                        1200 - 1500 Kkal
                      </Text>
                    </View>
                  </View>
                  <View className="pt-5 pb-5 border-b border-gray-300 border-dashed">
                    <View
                      className="flex justify-between items-center"
                      style={{ flexDirection: "row" }}
                    >
                      <View>
                        <Text>Active Day</Text>
                      </View>
                      <View>
                        <Text>26 Days</Text>
                      </View>
                    </View>
                    <View>
                      <View
                        className="flex justify-between items-center pt-3"
                        style={{ flexDirection: "row" }}
                      >
                        <View>
                          <Text>Main Course</Text>
                        </View>
                        <View>
                          <Text>3x</Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <View
                        className="flex justify-between items-center pt-3"
                        style={{ flexDirection: "row" }}
                      >
                        <View>
                          <Text>Snack</Text>
                        </View>
                        <View>
                          <Text>1x</Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <View
                        className="flex justify-between items-center pt-3"
                        style={{ flexDirection: "row" }}
                      >
                        <View>
                          <Text>Beverages</Text>
                        </View>
                        <View>
                          <Text>1x</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View className="border-b border-gray-300 border-dashed pb-5 pt-2">
                    <View
                      className="flex justify-between items-center pt-3"
                      style={{ flexDirection: "row" }}
                    >
                      <Text className="font-semibold text-lg">
                        Rp 1.200.000
                      </Text>
                      <Pressable>
                        <Text className="font-semibold text-orange-500">
                          View Menu
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                  <View className="pt-5">
                    <Pressable className="bg-orange-500 rounded-full text-sm py-4">
                      <Text className="text-white text-center font-semibold">
                        Buy this Package
                      </Text>
                    </Pressable>
                  </View>
                  <View className="pt-5">
                    <Pressable onPress={() => navigation.navigate("MainHome")}>
                      <Text className="text-center text-orange-500 font-medium text-sm">Skip for Now</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;
