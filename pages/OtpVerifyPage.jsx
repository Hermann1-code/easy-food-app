import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { OtpInput } from "react-native-otp-entry";
import { useRoute, navigation, useNavigation } from "@react-navigation/native";
import { width } from "../lib/service";
import axios from "axios";
import { apiUrl } from "../lib/config";

export default function OtpVerifyPage() {
  const [secondes, setSecondes] = useState(60);
  const [code, setCode] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setSecondes(secondes - 1);
    }, 1000);
  });
  const route = useRoute();
  const navigation = useNavigation();
  const { email } = route.params;

  const handleSubmit = async () => {
    console.log(code);
    try {
      const response = await axios.post(
        `${apiUrl}/api/auth/verifyCode/${email}`,
        { code }
      );
      console.log(response.data);
      navigation.replace("PersonnalInfo", { email: email });
    } catch (err) {
      console.log(err);
    }
  };

  // Extraire les deux derniers chiffres

  return (
    <View className="flex-1 bg-white p-5">
      <Text className="text-3xl font-bold">Verifier votre messagerie</Text>
      <Text className="my-3 text-lg">
        Nous vous avons envoye un code à 6 chiffres au {email} .
      </Text>
      <Text className="text-xl font-bold mt-10 mb-5">Entrez le code</Text>
      <OtpInput
        numberOfDigits={6}
        onTextChange={(text) => {
          // console.log(code);
          setCode(text);
        }}
      />
      {secondes > 0 ? (
        <Text className="mt-5">
          Vous pourrez demandé un nouveau code dans secondes
          <Text className="font-bold"> {secondes} secondes</Text>
        </Text>
      ) : (
        <TouchableOpacity className="mt-5">
          <Text>Demander un autre code</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={handleSubmit}
        className={`w-[${width}-10] bg-[#9A0000] p-4 justify-center items-center rounded-2xl my-8 mt-10`}
      >
        <Text className="text-white">Continuer</Text>
      </TouchableOpacity>
    </View>
  );
}
