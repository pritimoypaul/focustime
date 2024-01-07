import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <View className="m-4 pt-2 pb-2 pl-6 pr-6 bg-orange-500 rounded-full">
          <Text className="text-white">Go to Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
