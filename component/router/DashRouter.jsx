import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../pages/Home";
import Cart from "../../pages/Cart";
import Commandes from "../../pages/FinishComandes";
import Settings from "../../pages/ProfilPage";
import Icon from "react-native-vector-icons/Feather";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HomeRooter from "./HomeRooter";
import CartRouter from "./CartRouter";
import ProfilRouter from "./ProfilRouter";
import CommandesRouter from "./CommandesRouteur";
import UserContext, { Userprovider } from "../UserContext";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import DashHeader from "../DashHeader";

const Tab = createBottomTabNavigator();

export default function DashRouter() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false); // État pour contrôler le chargement

  // useEffect(() => {
  //   setLoading(true);
  //   const token = AsyncStorage.getItem("userToken");
  //   if (token) {
  //     const response = axios.get("http://192.168.153.42:3000/api/auth/user", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setUser(response.data);
  //     console.log(response.data);
  //   }
  // }, []);
  return (
    // <Userprovider>
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1">
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
              tabBarShowLabel: false,

              tabBarActiveTintColor: "#9A0000", // Couleur de l'icône lorsqu'il est sélectionné
              inactiveTintColor: "gray", // Couleur de l'icône lorsqu'il n'est pas sélectionné
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Welcome") {
                  iconName = "home"; // Remplacez 'home' par le nom de l'icône que vous souhaitez utiliser pour l'onglet 'Home'
                } else if (route.name === "CartRouter") {
                  iconName = "shopping-cart"; // Remplacez 'settings' par le nom de l'icône que vous souhaitez utiliser pour l'onglet 'Settings'
                } else if (route.name === "CommandesRouter") {
                  iconName = "list"; // Remplacez 'settings' par le nom de l'icône que vous souhaitez utiliser pour l'onglet 'Settings'
                } else if (route.name === "ProfilRouter") {
                  iconName = "user"; // Remplacez 'settings' par le nom de l'icône que vous souhaitez utiliser pour l'onglet 'Settings'
                }

                // Vous pouvez retourner n'importe quel composant d'icône ici
                return <Icon name={iconName} size={size} color={color} />;
              },
            })}
          >
            <Tab.Screen
              // addToCart={addToCart}
              // decreaseQty={decreaseQty}
              name="Welcome"
              component={HomeRooter}
            />
            <Tab.Screen
              // addToCart={addToCart}
              // decreaseQty={decreaseQty}
              name="CartRouter"
              options={{ tabBarVisible: false }}
              component={CartRouter}
            />
            <Tab.Screen
              // addToCart={addToCart}
              // decreaseQty={decreaseQty}
              name="CommandesRouter"
              component={CommandesRouter}
            />
            <Tab.Screen
              // addToCart={addToCart}
              // decreaseQty={decreaseQty}
              name="ProfilRouter"
              component={ProfilRouter}
              options={{
                headerShown: true,
                headerTitleAlign: "center",
                headerStyle: { elevation: 0 },
                headerTitle: "Mon Profil",
              }}
            />
          </Tab.Navigator>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    // </Userprovider>
  );
}
