import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  Pressable,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const MealsShow = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Pressable className="pb-4" onPress={() => navigation.navigate("Details", { itemId: item.id })}>
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
            {item.name || "Missing Data"}
          </Text>
          <Text
            className="text-base text-gray-500 pt-1.5"
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {item.description || "Missing Data"}
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
              <Text className="text-sm pl-1 text-gray-600">
                {item.calories || "Missing Data"}
              </Text>
            </View>
            <View className="items-center" style={{ flexDirection: "row" }}>
              <Image
                style={{ width: 11, height: 11 }}
                source={require("../../../assets/protein-gray.png")}
              />
              <Text className="text-sm pl-1 text-gray-600">
                {item.protein || "Missing Data"}
              </Text>
            </View>
            <View className="items-center" style={{ flexDirection: "row" }}>
              <Image
                style={{ width: 11, height: 11 }}
                source={require("../../../assets/fat-gray.png")}
              />
              <Text className="text-sm pl-1 text-gray-600">
                {item.fat || "Missing Data"}
              </Text>
            </View>
            <View className="items-center" style={{ flexDirection: "row" }}>
              <Image
                style={{ width: 11, height: 11 }}
                source={require("../../../assets/carbs-gray.png")}
              />
              <Text className="text-sm pl-1 text-gray-600">
                {item.carbohydrates || "Missing Data"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const MealsData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://239b-36-73-34-181.ngrok-free.app/api/admin/meals",
          {
            headers: { "ngrok-skip-browser-warning": "true" },
          }
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000FF" /> // Customize size and color as desired
      ) : (
        <>
          {error && <Text>Error fetching menu: {error.message}</Text>}
          {!error &&
            data.length === 0 && ( // Handle empty data state
              <Text>No menu items available today.</Text>
            )}
          {!isLoading &&
            !error &&
            data.length > 0 && // Check for data length before rendering
            data.map((item, index) => <MealsShow key={index} item={item} />)}
        </>
      )}
    </View>
  );
};

export default function MealsScreen({ navigation }) {
  return (
    <ScrollView className="bg-gray-50 min-h-full">
      <View className="px-4 pt-4">
        <MealsData />
      </View>
    </ScrollView>
  );
}
