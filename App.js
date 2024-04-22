import React, { useState, useEffect } from "react";
import { Image, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Router from "./component/router/Router";
import { CartProvider } from "./component/CartContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserProvider } from "./component/UserContext";

export default function App() {
  const [isFirstTime, setIsFirstTime] = useState(null);

  useEffect(() => {
    // Vérifie si c'est la première utilisation de l'application
    AsyncStorage.getItem("isFirstTime").then((value) => {
      setIsFirstTime(value === null);
      console.log("isFirstTime:", value);
    });
  }, []);

  const buttonLabel = (label) => {
    return (
      <View style={{ padding: 10 }}>
        <Text>{label} </Text>
      </View>
    );
  };

  const data = [
    {
      id: 1,
      title: "Des plats locaux de tout genre",
      content: "Reference site about Lorem Ipsum",
      image: require("./assets/eating.png"),
    },
    {
      id: 2,
      title: "Temps de livraison rapide",
      content: "Reference site about Lorem Ipsum",
      image: require("./assets/delivery.png"),
    },
    {
      id: 3,
      title: "Des prix très abordables",
      content: "Reference site about Lorem Ipsum",
      image: require("./assets/money.png"),
    },
  ];

  const handleDone = () => {
    AsyncStorage.setItem("isFirstTime", "false");
    setIsFirstTime(false);
  };

  if (isFirstTime === null) {
    // Attendre que la vérification de la première utilisation soit terminée
    return null;
  }

  if (isFirstTime) {
    // Afficher le composant AppIntroSlider pour la première utilisation
    return (
      <AppIntroSlider
        data={data}
        activeDotStyle={{
          width: 30,
          backgroundColor: "#9A0000",
        }}
        renderNextButton={() => buttonLabel("Suivant")}
        renderPrevButton={() => buttonLabel("Précédent")}
        renderDoneButton={() => buttonLabel("Commencer")}
        renderSkipButton={() => buttonLabel("Sauter")}
        showSkipButton
        onSkip={() => setIsFirstTime(false)}
        onDone={handleDone}
        showPrevButton
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={item.image}
                style={{ width: 450, height: 500 }}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 23, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text>{item.content}</Text>
            </View>
          );
        }}
      />
    );
  }

  // Afficher le Router après la première utilisation
  return (
    <NavigationContainer>
      <CartProvider>
        <UserProvider>
          <Router />
        </UserProvider>
      </CartProvider>
    </NavigationContainer>
  );
}
