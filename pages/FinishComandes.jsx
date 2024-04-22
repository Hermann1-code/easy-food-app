import { View, Text, ScrollView } from "react-native";
import React from "react";
import DashHeader from "../component/DashHeader";

export default function FinishComandes() {
  return (
    <ScrollView className=" bg-white flex-1">
      <View className="p-6 border border-gray-300 m-3 rounded-lg ">
        <View className="flex-row justify-between items-center">
          <Text className="text-[9px] font-medium">Commande N° :</Text>
          <Text className="font-bold">
            fqveeqvev
            {/* {item.items.length} {item.items.length > 1 ? "Produits" : "Produit"} */}
          </Text>
        </View>
        <View className="flex-row justify-between items-center">
          <View>
            <View className="my-2">
              <Text>Total : Fcfa</Text>
              <Text>Frais de livraison : Fcfa</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="p-6 border border-gray-300 m-3 rounded-lg ">
        <View className="flex-row justify-between items-center">
          <Text className="text-[9px] font-medium">Commande N° :</Text>
          <Text className="font-bold">
            fqveeqvev
            {/* {item.items.length} {item.items.length > 1 ? "Produits" : "Produit"} */}
          </Text>
        </View>
        <View className="flex-row justify-between items-center">
          <View>
            <View className="my-2">
              <Text>Total : Fcfa</Text>
              <Text>Frais de livraison : Fcfa</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="p-6 border border-gray-300 m-3 rounded-lg ">
        <View className="flex-row justify-between items-center">
          <Text className="text-[9px] font-medium">Commande N° :</Text>
          <Text className="font-bold">
            fqveeqvev
            {/* {item.items.length} {item.items.length > 1 ? "Produits" : "Produit"} */}
          </Text>
        </View>
        <View className="flex-row justify-between items-center">
          <View>
            <View className="my-2">
              <Text>Total : Fcfa</Text>
              <Text>Frais de livraison : Fcfa</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
