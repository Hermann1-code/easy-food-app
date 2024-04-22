import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function NotificationCard() {
  return (
    <TouchableOpacity className="p-4 bg-gray-50 rounded-2xl my-1">
      <View className="flex-row justify-between items-center">
        <Text className="font-semibold text-md">Creation de compte</Text>
        <Text className="text-xs text-gray-400">Il y a 5 minutes</Text>
      </View>
      <Text className="my-1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam at
        explicabo quasi.
      </Text>
    </TouchableOpacity>
  );
}
