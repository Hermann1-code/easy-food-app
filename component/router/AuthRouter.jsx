import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SetNumberPage from "../../pages/SetNumberPage";
import OtpVerifyPage from "../../pages/OtpVerifyPage";
import Icon from "react-native-vector-icons/Feather";
import PersonnalInfoPage from "../../pages/PersonnalInfoPage";
import SetPositionPage from "../../pages/SetPositionPage";
import LoginPage from "../../pages/LoginPage";

const Stack = createStackNavigator();

export default function AuthRouter() {
  return (
    <Stack.Navigator
      initialRouteName="SetNumber"
      screenOptions={{
        headerShown: false,
        headerBackImage: () => <Icon name="chevron-left" size={25} />,
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
      <Stack.Screen name="SetNumber" component={SetNumberPage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="PersonnalInfo" component={PersonnalInfoPage} />
      {/* <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "white",
            elevation: 0,
          },
          headerTitle: "",
        }}
        name="SetPosition"
        component={SetPositionPage}
      /> */}
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "white",
            elevation: 0,
          },
          headerTitle: "",
        }}
        name="OtpVerify"
        component={OtpVerifyPage}
      />
    </Stack.Navigator>
  );
}
