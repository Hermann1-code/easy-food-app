import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/Ionicons";
import CartContext from "./CartContext";
import { useNavigation } from "@react-navigation/native";
import Config from "react-native-config";

import AsyncStorage from "@react-native-async-storage/async-storage";
import UserContext from "./UserContext";

export default function DashHeader() {
  const { cartItems } = useContext(CartContext);
  const navigation = useNavigation();
  // const [userData, setUserData] = useState([]);
  const { user } = useContext(UserContext);

  // console.log(user);
  return (
    <View className={`h-20 w-[100%] flex-row justify-between items-center`}>
      <View>
        <Text className="text-[8px]">Bienvenue</Text>
        <Text className="font-bold">{user && user.prenoms}</Text>
      </View>
      <Image
        source={require("../assets/logo.png")}
        resizeMode="contain"
        style={{
          width: 80,
          height: 40,
        }}
      />
      <View className="flex-row items-center gap-5">
        <TouchableOpacity
          className="relative"
          onPress={() => navigation.navigate("CartRouter")}
        >
          <View className="w-5 h-5 rounded-full bg-[#9A0000] absolute -top-2 -right-3 z-50  justify-center items-center ">
            <Text className="text-white font-bold text-[10px]">
              {cartItems ? cartItems.length : "0"}
            </Text>
          </View>
          <Icon name="shopping-cart" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Notification")}
          className="w-10 h-10 rounded-full justify-center items-center bg-gray-200"
        >
          <Icon2 name="notifications-outline" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
