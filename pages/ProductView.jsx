import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { height, width } from "../lib/service";
import Icon2 from "react-native-vector-icons/EvilIcons";
import CartContext from "../component/CartContext";
import Icon from "react-native-vector-icons/Feather";

export default function ProductView() {
  const { addToCart, decreaseQty, cartItems } = useContext(CartContext);
  const router = useRoute();
  const navigation = useNavigation();

  const { item } = router.params;
  return (
    <View className="flex-1 bg-white relative">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="w-10 h-10 bg-gray-300 rounded-full absolute left-5 top-5 flex-row justify-center items-center"
      >
        <Icon name="chevron-left" size={28} />
      </TouchableOpacity>
      <View className="flex-1 justify-center items-center">
        <Image
          source={item.image}
          style={{ width: width - 50, height: height - 500 }}
          resizeMode="contain"
        />
      </View>
      <View
        className="flex-1 rounded-t-3xl shadow flex-col bg-white p-6 items-start"
        style={{
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 35,
          },
          shadowOpacity: 1,
          shadowRadius: 9,
          elevation: 7,
        }}
      >
        <Text className="font-bold text-xl uppercase">{item.name}</Text>
        <Text className="my-2 text-[16px] ">{item.description}</Text>
        <View className="flex-row">
          <Icon2 name="star" size={25} />
          <Icon2 name="star" size={25} />
          <Icon2 name="star" size={25} />
          <Icon2 name="star" size={25} />
          <Icon2 name="star" size={25} />
        </View>
        <View className="flex-row justify-between my-3">
          <Text className="font-bold">{item.price} FCFA </Text>
          <Text className="text-xs">Temps de cuissons : 25min</Text>
        </View>
        <TouchableOpacity
          onPress={() => addToCart(item)}
          className={`w-full] self-end bg-[#9A0000] p-4 justify-center items-center rounded-2xl my-8 mt-10`}
        >
          <Text className="text-white">Ajouter au panier</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
