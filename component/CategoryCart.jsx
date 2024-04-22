import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { apiUrl } from "../lib/config";
import { useNavigation } from "@react-navigation/native";

export default function CategoryCart({ data }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CategoryProduct")}
      className="w-36 h-40 rounded-xl flex-col bg-gray-200 mr-5 p-4 overflow-hidden"
    >
      <Text className="text-md font-bold uppercase">{data.name}</Text>
      <View className="w-full h-28 justify-end">
        <Image
          className=" w-full h-full object-cover"
          source={{ uri: `${apiUrl}${data.image}` }}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
}
