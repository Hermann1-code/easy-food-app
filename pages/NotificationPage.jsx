import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationCard from "../component/NotificationCard";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

export default function NotificationPage() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white px-4 -my-5">
      <ScrollView className="" showsVerticalScrollIndicator={false}>
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </ScrollView>
    </SafeAreaView>
  );
}
