import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { width } from "../lib/service";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { apiUrl } from "../lib/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SetPositionPage() {
  const [coords, setCoords] = useState("48.85, 2.35");
  const router = useRoute();

  const { id } = router.params;
  console.log(id);

  // const navigation = useNavigation();
  // useEffect(() => {
  //   getUserCoord();
  // }, []);
  const navigation = useNavigation();

  const getUserCoord = async function () {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();

      setCoords(`${location.coords.latitude},${location.coords.longitude}`);

      try {
        const userToken = await AsyncStorage.getItem("userToken");
        const response = await axios.put(
          `${apiUrl}/api/commandes/${id}`,
          { geo: coords },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );

        console.log(response.data);
        navigation.navigate("Delivery");
      } catch (error) {
        console.log(JSON.stringify(error.message));
      }
    } else {
      setCoords("48.85, 2.35");
    }
  };
  console.log(coords);
  return (
    <View className="bg-white flex-1 px-4 py-8">
      <Text className="text-3xl font-bold">Informations personelle</Text>
      <Text className="text-md my-5">
        Saisissez vos informations personnelles pour finaliser la creation de
        votre compte
      </Text>
      <Image
        source={require("../assets/location.png")}
        resizeMode="contain"
        className={`w-[${width}] my-5`}
      />
      <Text className="text-center text-md">
        Veuillez ajouter votre location ! Cela nous aidera à effectuer plus
        aisement vos livraison
      </Text>
      <TouchableOpacity
        onPress={() => getUserCoord()}
        className={`w-[${width}-10] bg-[#9A0000] p-4 justify-center items-center rounded-2xl my-8 mt-10`}
      >
        <Text className="text-white">Utiliser ma localisation</Text>
      </TouchableOpacity>
    </View>
  );
}
