import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InputLabel from "../component/InputLabel";
import { width } from "../lib/service";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { apiUrl } from "../lib/config";

export default function PersonnalInfoPage() {
  const [noms, setNoms] = useState("");
  const [prenoms, setPrenoms] = useState("");
  const [numero, setNumero] = useState("");
  const [quartier, setQuartier] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const route = useRoute();
  const navigation = useNavigation();

  const { email } = route.params;

  const handleSubmitpersonal = async () => {
    try {
      const updateUser = await axios.post(
        `${apiUrl}/api/auth/setPersonnalInfo/${email}`,
        {
          noms,
          prenoms,
          numero,
          quartier,
          password,
        }
      );

      try {
        if (updateUser.data && updateUser.data.token) {
          // Sauvegarde du token dans AsyncStorage
          try {
            const setDate = await AsyncStorage.setItem(
              "userToken",
              updateUser.data.token
            );

            console.log("Token sauvegardé :", updateUser.data.token);
            navigation.replace("DashRouter");
          } catch (error) {
            console.log(error);
          }
        } else {
          console.log("Token non trouvé dans la réponse :", updateUser.data);
        }
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View className="flex-1 bg-white px-4 py-16">
      <Text className="text-3xl font-bold">Informations personelle</Text>
      <Text className="text-md my-3">
        Saisissez vos informations personnelles pour finaliser la creation de
        votre compte
      </Text>

      <View className="my-2">
        <Text>Nom de famille</Text>
        <TextInput
          className="p-3 border border-gray-300 rounded-2xl"
          placeholder="Entrez votre nom de famille"
          onChangeText={(e) => setNoms(e)}
        />
      </View>
      <View className="my-2">
        <Text>Prenoms</Text>
        <TextInput
          className="p-3 border border-gray-300 rounded-2xl"
          placeholder="Entrez vos prenoms"
          onChangeText={(e) => setPrenoms(e)}
        />
      </View>
      <View className="my-2">
        <Text>Numero de téléphone</Text>
        <TextInput
          className="p-3 border border-gray-300 rounded-2xl"
          placeholder="Entrez votre numero de téléphone"
          onChangeText={(e) => setNumero(e)}
          keyboardType="numeric"
        />
      </View>

      <View className="my-2">
        <Text>Quartier de Residences</Text>
        <TextInput
          className="p-3 border border-gray-300 rounded-2xl"
          placeholder="Entrez votre quartier de residence"
          onChangeText={(e) => setQuartier(e)}
        />
      </View>
      <View className="my-2">
        <Text>Mot de passe</Text>
        <TextInput
          className="p-3 border border-gray-300 rounded-2xl"
          placeholder="Creez un mot de passe"
          secureTextEntry={true}
          onChangeText={(e) => setPassword(e)}
        />
      </View>
      <View className="my-2">
        <Text>Confirmation de mot de passe</Text>
        <TextInput
          className="p-3 border border-gray-300 rounded-2xl"
          placeholder="Confirmez votre mot de passe"
          secureTextEntry={true}
          onChangeText={(e) => setConfPassword(e)}
        />
      </View>
      <TouchableOpacity
        onPress={handleSubmitpersonal}
        className={` bg-[#9A0000] p-4 justify-center items-center rounded-2xl my-8 mt-5`}
      >
        <Text className="text-white">Valider</Text>
      </TouchableOpacity>
    </View>
  );
}
