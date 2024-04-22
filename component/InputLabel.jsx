import { View, Text, TextInput } from "react-native";
import React from "react";

export default function InputLabel({ label, type }) {
  // const text  = label.to
  return (
    <View className="my-3">
      <Text className="text-md">{label}</Text>
      <TextInput
        className="px-3 py-2 rounded-xl border border-gray-300"
        placeholder={`Tapez votre ${label.toLowerCase()}`}
        type={type}
      />
    </View>
  );
}
