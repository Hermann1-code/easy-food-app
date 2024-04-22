import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/EvilIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function FoodCard({ data, navigation, addToCart, decreaseQty }) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductView", {
          item: data,
        })
      }
      className="border flex-col p-3 mr-5 border-gray-300 h-[280px] w-[220px] rounded-2xl realtive"
    >
      <View className="absolute w-10 h-10 bg-gray-200 shadow-xl rounded-full right-3 top-3 justify-center items-center">
        <FontAwesome name="heart-o" size={20} />
      </View>
      <View className="w-full h-[50%] ">
        <Image source={data.image} className="w-full" resizeMode="contain" />
      </View>
      <View>
        <View className="flex-row justify-between">
          <Text className="font-bold uppercase text-[10px] ">{data.name}</Text>
          <Text className="text-[#9A0000] font-semibold text-xs">
            {data.price} FCFA{" "}
          </Text>
        </View>
        <Text className="text-xs text-gray-500">{data.category.name}</Text>
        <Text>{data.description}</Text>

        <View className="flex-row">
          <Icon2 name="star" size={20} />
          <Icon2 name="star" size={20} />
          <Icon2 name="star" size={20} />
          <Icon2 name="star" size={20} />
          <Icon2 name="star" size={20} />
        </View>
        <TouchableOpacity
          onPress={() => addToCart(data)}
          className="flex-row mt-2 h-10 w-full bg-[#9A0000] items-center justify-center rounded-xl self-end"
        >
          <Icon name="shopping-cart" size={20} color={"white"} />
          <Text className="text-white mx-2">Ajouter au panier</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
