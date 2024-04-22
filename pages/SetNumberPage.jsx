import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import Config from "react-native-config";
import { width } from "../lib/service";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiUrl } from "../lib/config";

export default function SetNumberPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const checkUserToken = async () => {
      try {
        const value = await AsyncStorage.getItem("userToken");
        if (value) {
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
      const sendEmail = await axios.post(`${apiUrl}/api/auth/addNumber`, {
        email,
      });
      console.log("Mail envoyé");
      navigation.navigate("OtpVerify", {
        email: email,
      });
    } catch (error) {
      console.log("err", error);
    }
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#9A0000" />
      </View>
    );
  }

  return (
    <View className="px-4 flex-1 justify-center  bg-white">
      <Image
        source={require("../assets/contact.png")}
        style={{ width: width, height: 450 }}
        resizeMode="contain"
      />
      <Text className="font-bold text-3xl">Ajoutez votre adresse email</Text>
      <Text className="my-5">Reference site about Lorem Ipsum</Text>
      <TextInput
        className="p-3 border border-gray-300 rounded-lg"
        placeholder="Entrez votre adresse email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
      />
      <TouchableOpacity
        onPress={handleSubmit}
        className={`w-[${width}-10] bg-[#9A0000] p-4 justify-center items-center rounded-2xl my-8`}
      >
        <Text className="text-white">Continuer</Text>
      </TouchableOpacity>
      <View className="flex-row justify-center items-center">
        <Text>Vous avez déjà un compte ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text className="font-bold">Connectez vous</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
