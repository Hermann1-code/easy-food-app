import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useContext, useState } from "react";
import DashHeader from "../component/DashHeader";

import CartCard from "../component/CartCard";
import { height, width } from "../lib/service";
import CartContext from "../component/CartContext";
import { useNavigation } from "@react-navigation/native";

export default function Cart() {
  const { addToCart, decreaseQty, cartItems, fetchData } =
    useContext(CartContext);
  const totalPrice =
    cartItems &&
    Object.values(cartItems).reduce((total, item) => {
      if (item.productId) {
        // Vérification de nullité
        return total + item.quantity * item.productId.price;
      } else {
        return total; // Si productId est null, retourne le total sans rien ajouter
      }
    }, 0);

  const [total, setTotal] = useState(0);
  const navigation = useNavigation();
  // Fonction pour mettre à jour le total en ajoutant le prix de chaque article
  console.log(cartItems);
  return (
    <View className="px-4 bg-white flex-1">
      <DashHeader />

      <ScrollView className="mt-5" showsVerticalScrollIndicator={false}>
        <Text className="font-bold text-xl">Mon panier</Text>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => {
            return <CartCard key={index} data={item} />;
          })
        ) : (
          <View className="flex-col flex-1 justify-center items-center">
            <Image
              source={require("../assets/empty.png")}
              resizeMode="contain"
              style={{ width: width, height: height - 500 }}
            />
            <Text className="text-lg text-center italic font-bold">
              Votre panier est vide pour l'instant ! Ajoutez-y des produits
            </Text>
          </View>
        )}
      </ScrollView>
      {cartItems && cartItems.length > 0 && (
        <View>
          <View className="mt-5 flex-row justify-end">
            <Text className="font-bold italic text-xl">
              Total : {totalPrice} Fcfa
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ResumePaiment")}
            className={`w-[${width}-10] bg-[#9A0000] p-4 justify-center items-center rounded-2xl my-8`}
          >
            <Text className="text-white">Valider ma Commande</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
