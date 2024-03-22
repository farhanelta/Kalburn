import { useRoute, useParams } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  Pressable,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MealsDetails({ navigation }) {
  const route = useRoute();
  const { itemId } = useRoute().params;
  const fetchLink = "https://239b-36-73-34-181.ngrok-free.app"

  const [mealDetails, setMealDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch meal details based on itemId (if available)
  useEffect(() => {
    if (itemId) {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://239b-36-73-34-181.ngrok-free.app/api/admin/meal/${itemId}`
          ); // Replace with your API URL
          setMealDetails(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [itemId]);

  if (isLoading) {
    return (
      <View className="min-w-full min-h-full justify-center items-center">
        <ActivityIndicator size="large" color="#FB6514" />
      </View>
    );
  }

  if (error) {
    return <Text>Error fetching details: {error.message}</Text>;
  }

  if (!mealDetails) {
    return <Text>No details available for this meal.</Text>;
  }

  return (
    <SafeAreaView>
      <Pressable
        className="absolute top-12 left-3 z-[100]"
        onPress={() => navigation.goBack()}
      >
        <View className="bg-white rounded-full">
          <View className="px-3 py-3">
            <Image
              style={{ width: 12, height: 12 }}
              source={require("../../../assets/back.png")}
            />
          </View>
        </View>
      </Pressable>
      <View className="pb-20">
        <ScrollView className="bg-white">
          <View>
            <Image
              className="min-w-full h-[300]"
              source={{
                uri: `${fetchLink}/images/naruto.jpeg`,
              }}
            />
          </View>
          <View>
            <View className="p-4 border-b border-gray-300">
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
              <Text className="font-semibold text-xl py-2">
                {mealDetails.name || "Missing Data"}
              </Text>
              <Text className="font-semibold text-base text-orange-500">
                Rp. 54.000
              </Text>
            </View>
            <View className="p-4">
              <Text className="text-base text-gray-500 pb-6">
                {mealDetails.description || "Missing Data"}
              </Text>

              <Text className="font-semibold text-xl pb-4">Ingredients</Text>

              <View>
                <View className="pb-3">
                  <View className="border-b border-gray-300">
                    <View
                      className="flex justify-between pb-3"
                      style={{ flexDirection: "row" }}
                    >
                      <Text className="font-medium text-gray-500">
                        Organic Yogurt
                      </Text>
                      <Text className="font-medium text-gray-500">290g</Text>
                    </View>
                  </View>
                </View>
                <View className="pb-3">
                  <View className="border-b border-gray-300">
                    <View
                      className="flex justify-between pb-3"
                      style={{ flexDirection: "row" }}
                    >
                      <Text className="font-medium text-gray-500">
                        Strawberry
                      </Text>
                      <Text className="font-medium text-gray-500">70g</Text>
                    </View>
                  </View>
                </View>
                <View className="pb-3">
                  <View className="border-b border-gray-300">
                    <View
                      className="flex justify-between pb-3"
                      style={{ flexDirection: "row" }}
                    >
                      <Text className="font-medium text-gray-500">Honey</Text>
                      <Text className="font-medium text-gray-500">70g</Text>
                    </View>
                  </View>
                </View>
                <View className="pb-3">
                  <View className="border-b border-gray-300">
                    <View
                      className="flex justify-between pb-3"
                      style={{ flexDirection: "row" }}
                    >
                      <Text className="font-medium text-gray-500">Sugar</Text>
                      <Text className="font-medium text-gray-500">60g</Text>
                    </View>
                  </View>
                </View>
                <View className="pb-3">
                  <View className="border-b border-gray-300">
                    <View
                      className="flex justify-between pb-3"
                      style={{ flexDirection: "row" }}
                    >
                      <Text className="font-medium text-gray-500">Salt</Text>
                      <Text className="font-medium text-gray-500">35g</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{ flexDirection: "row" }}
                className="items-center pt-5"
              >
                <Text className="font-semibold text-xl pb-4">Nutritions </Text>
                <Text className="font-semibold text-base pb-4">
                  (Customizable)
                </Text>
              </View>

              <View>
                <View className="pb-3">
                  <View className="border-b border-gray-300">
                    <View
                      className="flex justify-between pb-3"
                      style={{ flexDirection: "row" }}
                    >
                      <Text className="font-medium text-gray-500">
                        Calories
                      </Text>
                      <Text className="font-medium text-gray-500">
                        {mealDetails.calories || "Missing Data"}g
                      </Text>
                    </View>
                  </View>
                </View>
                <View className="pb-3">
                  <View className="border-b border-gray-300">
                    <View
                      className="flex justify-between pb-3"
                      style={{ flexDirection: "row" }}
                    >
                      <Text className="font-medium text-gray-500">Protein</Text>
                      <Text className="font-medium text-gray-500">
                        {mealDetails.protein || "Missing Data"}g
                      </Text>
                    </View>
                  </View>
                </View>
                <View className="pb-3">
                  <View className="border-b border-gray-300">
                    <View
                      className="flex justify-between pb-3"
                      style={{ flexDirection: "row" }}
                    >
                      <Text className="font-medium text-gray-500">Carb</Text>
                      <Text className="font-medium text-gray-500">
                        {mealDetails.carbohydrates || "Missing Data"}g
                      </Text>
                    </View>
                  </View>
                </View>
                <View className="pb-3">
                  <View className="border-b border-gray-300">
                    <View
                      className="flex justify-between pb-3"
                      style={{ flexDirection: "row" }}
                    >
                      <Text className="font-medium text-gray-500">Fat</Text>
                      <Text className="font-medium text-gray-500">
                        {mealDetails.fat || "Missing Data"}g
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View className="absolute bottom-0">
        <View className="bg-white min-w-full justify-center p-4">
          <Pressable className="bg-orange-500 rounded-full text-sm py-4">
            <Text className="text-white text-center font-semibold">
              Buy Meals
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
