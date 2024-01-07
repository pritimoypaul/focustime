import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ProfileScreen = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>ProfileScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <View className="m-4 pt-2 pb-2 pl-6 pr-6 bg-orange-500 rounded-full">
          <Text className="text-white">Go to Home</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
