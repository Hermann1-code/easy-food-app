import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import DashHeader from "../component/DashHeader";
import { height, width } from "../lib/service";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DeliveryPage() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white px-4">
      <DashHeader />
      <View className="items-center">
        <Text className="font-bold text-3xl my-5 self-start">
          Veuillez patienter, votre commande est en cours de realisation afin
          que vous soyez livré
        </Text>
        <Image
          source={require("../assets/delivery.png")}
          resizeMode="contain"
          style={{ width: width + 150, height: height - 600 }}
          className=""
        />
        <TouchableOpacity
          onPress={() => navigation.replace("Cart")}
          className={`w-full bg-[#9A0000] p-4 justify-center items-center rounded-2xl my-8`}
        >
          <Text className="text-white font-bold uppercase">
            Retourner à mon panier
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
