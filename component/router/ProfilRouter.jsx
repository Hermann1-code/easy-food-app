import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../pages/Home";
import ProductView from "../../pages/ProductView";
import Cart from "../../pages/Cart";
import ResumePaiment from "../../pages/ResumePaiment";
import ProfilPage from "../../pages/ProfilPage";
import NotificationPage from "../../pages/NotificationPage";

const Stack = createStackNavigator();

export default function ProfilRouter() {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerShown: false,
        headerStyle: { elevation: 0 },
        gestureEnabled: true,
        gestureDirection: "horizontal", // Permet les gestes horizontaux
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
      }}
    >
      <Stack.Screen name="Profil" component={ProfilPage} />
    </Stack.Navigator>
  );
}
