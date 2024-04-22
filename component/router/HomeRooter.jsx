import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../pages/Home";
import ProductView from "../../pages/ProductView";
import Icon from "react-native-vector-icons/Feather";
import CategoryProducts from "../../pages/CategoryProducts";

const Stack = createStackNavigator();

export default function HomeRooter() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerBackImage: () => <Icon name="chevron-left" size={28} />,
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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "blue",
          },
        }}
        name="CategoryProduct"
        component={CategoryProducts}
      />
      <Stack.Screen name="ProductView" component={ProductView} />
    </Stack.Navigator>
  );
}
