import React, { useState } from "react";
import { View, TextInput, Text, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const RadioButton = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <View>
      {options.map((option, index) => (
        <Pressable
          key={index}
          className={({ pressed }) =>
            `flex flex-row items-center ${
              pressed ? "bg-gray-200" : "bg-transparent"
            } p-2 rounded-lg`
          }
          onPress={() => handleSelect(option)}
        >
          <View className="pb-3">
            <View
              className="border border-gray-300 text-lg text-black rounded-lg py-3 px-4"
              style={{ flexDirection: "row" }}
            >
              <View
                className={`h-6 w-6 rounded-full border ${
                  selectedOption === option
                    ? "border-orange-500"
                    : "border-gray-300"
                } flex items-center justify-center`}
              >
                {selectedOption === option && (
                  <View className="h-3 w-3 rounded-full bg-orange-500" />
                )}
              </View>
              <Text className="pl-3">{option}</Text>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default function GenderScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = (option) => {
    setSelectedValue(option);
  };

  return (
    <SafeAreaView className="bg-white">
      <View className="px-4 bg-white h-full">
        <Pressable className="pt-4 pl-2" onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <View className="pt-4">
          <Text className="text-2xl text-black font-semibold">
            What's your gender?
          </Text>
          <Text className="pt-1.5 pb-6 text-gray-500 text-base">
            Your gender helps us to refine your personalized nutrition plan
          </Text>
        </View>

        <RadioButton options={["Male", "Female"]} onSelect={handleSelect} />

        <View className="absolute inset-x-4 bottom-2.5">
          <Pressable
            className="bg-orange-500 rounded-full text-sm py-4"
            onPress={() => navigation.navigate("Goals")}
          >
            <Text className="text-white text-center">Continue</Text>
          </Pressable>
          <View className="pt-4">
            <View className="justify-center" style={{ flexDirection: "row" }}>
              <Text className="text-gray-500">
                By signing up you agree to the
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
