import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../pages/Home";
import ProductView from "../../pages/ProductView";
import Cart from "../../pages/Cart";
import ResumePaiment from "../../pages/ResumePaiment";
import SetPositionPage from "../../pages/SetPositionPage";
import DeliveryPage from "../../pages/DeliveryPage";

const Stack = createStackNavigator();

export default function CartRouter({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerShown: false,

        // gestureEnabled: true,
        // gestureDirection: "horizontal", // Permet les gestes horizontaux
        // cardStyleInterpolator: ({ current, layouts }) => {
        //   return {
        //     cardStyle: {
        //       transform: [
        //         {
        //           translateX: current.progress.interpolate({
        //             inputRange: [0, 1],
        //             outputRange: [layouts.screen.width, 0],
        //           }),
        //         },
        //       ],
        //     },
        //   };
        // },
      }}
    >
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="ResumePaiment" component={ResumePaiment} />
      <Stack.Screen name="SetPosition" component={SetPositionPage} />
      <Stack.Screen name="Delivery" component={DeliveryPage} />
    </Stack.Navigator>
  );
}
