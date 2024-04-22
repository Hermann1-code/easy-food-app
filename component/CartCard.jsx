import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import CartContext from "./CartContext";

export default function CartCard({ data }) {
  const { addToCart, decreaseQty } = useContext(CartContext);
  const [loading, setLoading] = useState(false); // État pour contrôler le chargement spécifique à cet élément

  const handleDecreaseQty = async () => {
    setLoading(true); // Activer le loader
    await decreaseQty(data.productId); // Appeler decreaseQty du contexte
    setLoading(false); // Désactiver le loader une fois l'opération terminée
  };

  const handleAddToCart = async () => {
    setLoading(true); // Activer le loader
    await addToCart(data.productId); // Appeler addToCart du contexte
    setLoading(false); // Désactiver le loader une fois l'opération terminée
  };

  return (
    <View className="w-full border border-gray-300 p-3 shadow-2xl my-2 rounded-2xl flex-row items-center bg-white">
      <Image source={data.image} />
      <View className="w-[70%]">
        <Text className="uppercase font-bold text-md">
          {data.productId.name}
        </Text>
        <Text className="text-xs">{data.productId.description}</Text>
        <View className="flex-row my-2 items-center">
          <TouchableOpacity
            onPress={handleDecreaseQty}
            className="w-8 h-8 rounded-full mx-2 border border-gray-300 justify-center items-center"
          >
            <Text>-</Text>
          </TouchableOpacity>
          {loading ? (
            <ActivityIndicator color={"#9A0000"} />
          ) : (
            <View>
              <Text className="font-bold">{data.quantity}</Text>
            </View>
          )}
          <TouchableOpacity
            onPress={handleAddToCart}
            className="w-8 h-8 rounded-full mx-2 border border-gray-300 justify-center items-center"
          >
            <Text>+</Text>
          </TouchableOpacity>
          <View className="flex-row">
            <Text className="italic font-bold">
              {" "}
              {data.productId.price} FCFA
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
