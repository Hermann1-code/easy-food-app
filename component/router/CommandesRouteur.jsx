import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EnCoursCommandes from "../../pages/EnCoursCommandes";
import FinishComandes from "../../pages/FinishComandes";
import DashHeader from "../DashHeader";
import AllCommandes from "../../pages/AllCommandes";

const Tab = createMaterialTopTabNavigator();

export default function CommandesRouter() {
  return (
    <View className="flex-1 bg-white">
      <View className="px-4">
        <DashHeader />
      </View>
      <Text className="font-bold text-xl mx-4">Mes commandes</Text>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: "red", height: 3 },
        }}
      >
        <Tab.Screen
          options={{ tabBarLabel: "Toutes" }}
          name="AllCommandes"
          component={AllCommandes}
        />
        <Tab.Screen
          options={{ tabBarLabel: "En attente" }}
          name="Encours"
          component={EnCoursCommandes}
        />
        <Tab.Screen name="Finish" component={FinishComandes} />
      </Tab.Navigator>
    </View>
  );
}
