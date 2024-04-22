import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../lib/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";

export default function AllCommandes() {
  const [commandes, setCommandes] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fectData();
  }, []);

  const fectData = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem("userToken");
      const response = await axios.get(`${apiUrl}/api/commandes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);
      setCommandes(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator />
        </View>
      ) : (
        <ScrollView className="flex-1 bg-white">
          {commandes && commandes.length > 0 ? (
            commandes.map((item, index) => (
              <View
                key={index}
                className="p-6 border border-gray-300 m-3 rounded-lg "
              >
                <View className="flex-row justify-between items-center">
                  <Text className="text-[9px] font-medium">
                    Commande N° : {item._id}{" "}
                  </Text>
                  <Text className="font-bold">
                    {item.items.length}{" "}
                    {item.items.length > 1 ? "Produits" : "Produit"}
                  </Text>
                </View>
                <View className="flex-row justify-between items-center">
                  <View>
                    <View className="my-2">
                      <Text>Total : {item.total} Fcfa</Text>
                      <Text>
                        Frais de livraison : {item.fraisLivraison} Fcfa
                      </Text>
                    </View>
                  </View>
                  <View
                    className={`${
                      item.status == "en attente"
                        ? "bg-gray-200"
                        : "bg-green-500"
                    } p-2 rounded-md`}
                  >
                    <Text className="text-[8px] ">{item.status}</Text>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <View>
              <Text>Pas de commande</Text>
            </View>
          )}
        </ScrollView>
      )}
    </>
  );
}
