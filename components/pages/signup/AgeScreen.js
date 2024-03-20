import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Pressable,
  Image,
  Platform,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 36,
    marginVertical: 60,
    color: "#111",
  },
  textSubHeader: {
    fontSize: 25,
    color: "#111",
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default function AgeScreen({ navigation }) {
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const handleCloseModal = () => {
    setOpenStartDatePicker(false);
  };
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState("12/12/2023");

  const handleDateChange = (date) => {
    setSelectedStartDate(date);
    handleCloseModal();
  };

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  return (
    <SafeAreaView className="bg-white">
      <View className="px-4 bg-white h-full">
        <Pressable className="pt-4 pl-2" onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <View className="pt-4">
          <Text className="text-2xl text-black font-semibold">
            How old are you?
          </Text>
          <Text className="pt-1.5 text-gray-500 text-base">
            Age is factor for us to calculate your daily calorie needs for a
            personalized diet plan.
          </Text>
        </View>

        <View className="pt-6">
          <Text className="pb-3 text-gray-500">Birth Date</Text>

          <View>
            <View>
              <Pressable
                className="border border-gray-400 text-lg text-black rounded-lg py-2.5 px-4"
                onPress={handleOnPressStartDate}
              >
                <Text>{selectedStartDate}</Text>
              </Pressable>
            </View>
          </View>

          <Modal
            animationType="pop"
            transparent={true}
            visible={openStartDatePicker}
            onRequestClose={handleCloseModal}
          >
            <Pressable
              className="min-w-full min-h-full"
              onPress={handleCloseModal}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <DatePicker
                    mode="calendar"
                    minimumDate="1950-01-01"
                    selected={startedDate}
                    onDateChange={handleDateChange}
                    options={{
                      backgroundColor: "#FFFFFF",
                      textHeaderColor: "#FB6514",
                      textDefaultColor: "#FB6514",
                      selectedTextColor: "#fff",
                      mainColor: "#FB6514",
                      textSecondaryColor: "#D6C7A1",
                      borderColor: "rgba(122, 146, 165, 0.1)",
                    }}
                  />
                </View>
              </View>
            </Pressable>
          </Modal>
        </View>

        <View className="absolute inset-x-4 bottom-2.5">
          <Pressable
            className="bg-orange-500 rounded-full text-sm py-4"
            onPress={() => navigation.navigate("Body")}
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
