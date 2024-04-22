import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import Icon from "react-native-vector-icons/Feather";
import UserContext from "../component/UserContext";

export default function ProfilPage() {
  const { user } = useContext(UserContext);
  return (
    <View className="px-4 bg-white flex-1 justify-center items-center">
      <View className="w-28 h-28 rounded-full bg-gray-300"></View>
      <Text className="font-bold text-lg">
        {user && user.noms} {user && user.prenoms}
      </Text>
      <View className="flex-row justify-between gap-5 my-5 px-8">
        <View className="border border-gray-300 rounded-2xl w-1/2 h-24 flex-col items-center justify-center">
          <Text className="font-bold text-2xl text-[#9A0000]">0</Text>
          <Text className="text-xs font-normal text-[#9A0000] text-center">
            Commandes en cours
          </Text>
        </View>
        <View className="border border-gray-300 rounded-2xl w-1/2 h-24 flex-col items-center justify-center">
          <Text className="font-bold text-2xl text-[#9A0000]">0</Text>
          <Text className="text-xs font-normal text-[#9A0000] text-center">
            Commandes livrés
          </Text>
        </View>
      </View>
      <View className="self-start px-4 w-full my-5 flex-col gap-5">
        <TouchableOpacity className="p-4 border border-gray-300 w-full rounded-2xl">
          <View className="flex-row items-center gap-4">
            <Icon name="user" size={20} />
            <Text className="font-bold ">Modifier son profil</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="p-4 border border-gray-300 w-full rounded-2xl">
          <View className="flex-row items-center gap-4">
            <Icon name="lock" size={20} />
            <Text className="font-bold ">Chancher mon mot de passe</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="p-4 bg-[#9A0000] w-1/2 rounded-2xl justify-center items-center my-8">
        <Text className="font-bold text-white">Se deconnecter</Text>
      </TouchableOpacity>
    </View>
  );
}
