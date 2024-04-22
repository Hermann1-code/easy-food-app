import { View, Text, Image, ActivityIndicator, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { height, width } from "../lib/service";
import { TouchableOpacity } from "react-native-gesture-handler";
import InputLabel from "../component/InputLabel";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Config from "react-native-config";
import { apiUrl } from "../lib/config";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const checkUserToken = async () => {
      try {
        const value = await AsyncStorage.getItem("userToken");
        if (value !== null) {
          navigation.replace("DashRouter");
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    checkUserToken();
  }, [navigation]);

  const handleSubmit = async () => {
    try {
      const login = await axios.post(`${apiUrl}/api/auth/login`, {
        email,
        password,
      });

      try {
        if (login.data && login.data.token) {
          // Sauvegarde du token dans AsyncStorage
          await AsyncStorage.setItem("userToken", login.data.token);
          console.log("Token sauvegardé :", login.data.token);
          navigation.replace("DashRouter");
        } else {
          console.log("Token non trouvé dans la réponse :", login.data);
        }
      } catch (err) {
        console.log(err);
      }
      console.log(login);
      navigation.replace("DashRouter");
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <View
      className="px-4"
      style={{ flex: 1, justifyContent: "center", backgroundColor: "white" }}
    >
      <Image
        source={require("../assets/contact.png")}
        style={{ width: width, height: 250 }}
        resizeMode="contain"
      />
      <Text className="font-bold text-3xl">Connectez vous à votre compte</Text>
      <Text className="my-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
      <View>
        <View className="my-2">
          <View className="my-2">
            <Text>Adresse email</Text>
            <TextInput
              className="p-3 border border-gray-300 rounded-2xl"
              placeholder="Entrez voadresse email"
              onChangeText={(e) => setEmail(e)}
            />
          </View>
          <Text>Mot de passe</Text>
          <TextInput
            className="p-3 border border-gray-300 rounded-2xl"
            placeholder="Creez un mot de passe"
            secureTextEntry={true}
            onChangeText={(e) => setPassword(e)}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        className={`w-[${width}-10] bg-[#9A0000] p-4 justify-center items-center rounded-2xl my-8`}
      >
        <Text className="text-white">Continuer</Text>
      </TouchableOpacity>

      <View className="flex-row justify-center items-center">
        <Text>Vous n'avez pas de compte ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SetNumber")}>
          <Text className="font-bold ">Inscrivez vous</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
