import { View, Text, Image, ScrollView } from "react-native";
import React, { useContext } from "react";
import DashHeader from "../component/DashHeader";
import { useNavigation, useRoute } from "@react-navigation/native";
import CartContext from "../component/CartContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import { width } from "../lib/service";
import axios from "axios";
import { apiUrl } from "../lib/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ResumePaiment() {
  const { cartItems, fetchData } = useContext(CartContext);
  const totalPrice = Object.values(cartItems).reduce((total, item) => {
    if (item.productId) {
      // Vérification de nullité
      return total + item.quantity * item.productId.price;
    } else {
      return total; // Si productId est null, retourne le total sans rien ajouter
    }
  }, 0);

  const setCommande = async () => {
    try {
      const userToken = await AsyncStorage.getItem("userToken");
      const response = await axios.post(`${apiUrl}/api/commandes`, null, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      // fetchData();
      console.log(response.data);
      navigation.navigate("SetPosition", { id: response.data._id });
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  };

  const navigation = useNavigation();
  return (
    <View className="flex-1 px-4 bg-white">
      <DashHeader />
      <Text className="font-bold text-xl mb-3">Résumé de ma commande </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="border border-gray-300 rounded-2xl">
          {cartItems.map((item, index) => (
            <View
              key={index}
              className="flex-row  p-2  my-3 justify-between items-center"
            >
              <Image source={item.image} />
              <View>
                <Text className="font-bold text-md">{item.productId.name}</Text>
                <Text className="italic">
                  {item.quantity} X {item.productId.price}
                </Text>
              </View>
              <View>
                <Text className="font-bold text-md">
                  {item.quantity * item.productId.price} FCFA{" "}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <Text className="font-bold text-xl my-5">Moyen de paiement</Text>
        <Text className="border border-gray-300 p-5 rounded-2xl mb-5">
          Payer à la livraison
        </Text>
      </ScrollView>
      <View>
        <View className="flex-row justify-between">
          <Text className=" text-md">Total</Text>
          <Text className="font-bold text-md italic">{totalPrice} FCFA </Text>
        </View>
        <View className="flex-row justify-between my-5">
          <Text className=" text-md">Frais de livraison</Text>
          <Text className=" text-md italic">500 FCFA </Text>
        </View>
        <View className="flex-row justify-between">
          <Text className=" text-md">Total à payer</Text>
          <Text className="font-bold text-md italic">
            {totalPrice + 500} FCFA{" "}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => setCommande()}
        className={`w-[${width}-10] bg-[#9A0000] p-4 justify-center items-center rounded-2xl my-8`}
      >
        <Text className="text-white">Continuer</Text>
      </TouchableOpacity>
    </View>
  );
}
