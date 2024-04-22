import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import DashHeader from "../component/DashHeader";
import Icon from "react-native-vector-icons/Feather";
import Category from "../component/Category";
import { FlatList } from "react-native";
import FoodCard from "../component/FoodCard";
import AppIntroSlider from "react-native-app-intro-slider";
import { datas } from "../lib/CarusselsData";
import { width } from "../lib/service";
import { useNavigation } from "@react-navigation/native";
import CartContext from "../component/CartContext";
import { AsyncStorage } from "react-native";
import axios from "axios";
import config from "react-native-config";
import { apiUrl } from "../lib/config";

export default function Home() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetchCategory();
    fetchProduct();
    console.log("err" + config.BASEURL);
  }, []);
  // const data = [
  //   {
  //     id: 1,
  //     title: "Croissant",
  //     Category: "Goutés",
  //     image: require("../assets/category/Goutés.png"),
  //     prix: 2500,
  //   },
  //   {
  //     id: 2,
  //     title: "Poulet grillé",
  //     Category: "Grillard",
  //     image: require("../assets/category/Grillades.png"),
  //     prix: 5000,
  //   },
  //   {
  //     id: 3,
  //     title: "Vin",
  //     Category: "Boissons",
  //     image: require("../assets/category/Boissons.png"),
  //     prix: 4000,
  //   },
  //   {
  //     id: 4,
  //     title: "Attieké",
  //     Category: "Accompagnement",
  //     image: require("../assets/category/Acompagnement.png"),
  //     prix: 1000,
  //   },
  //   {
  //     id: 5,
  //     title: "Poissons braisé",
  //     Category: "Braisé",
  //     image: require("../assets/category/Goutés.png"),
  //     prix: 7000,
  //   },
  // ];

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/product`);
      setProduct(response.data); // Assuming response.data contains the array of products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const fetchCategory = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/category`);
      setCategory(response.data); // Assuming response.data contains the array of products
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const { addToCart, decreaseQty, cartItems } = useContext(CartContext);

  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white px-4">
      <DashHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center bg-gray-100 w-full px-2 h-12 rounded-xl">
          <TextInput className="w-[85%]" placeholder="Faite votre recherche" />
          <TouchableOpacity className="bg-[#9A0000] w-[15%] h-8 rounded-xl justify-center items-center">
            <Icon name="search" size={20} color={"white"} />
          </TouchableOpacity>
        </View>
        <View className="my-5">
          <Text className="font-bold text-lg">Categories</Text>

          <Category data={category} />
        </View>
        <View className="">
          <Text className="font-bold text-lg">Nourriturezs poppulaires</Text>
          <FlatList
            data={product}
            horizontal={true} // Définir la FlatList comme horizontale
            renderItem={({ item }) => (
              <FoodCard
                addToCart={addToCart}
                decreaseQty={decreaseQty}
                navigation={navigation}
                data={item}
              />
            )}
            className="my-5"
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <AppIntroSlider
          data={datas}
          activeDotStyle={{
            width: 30,
            backgroundColor: "#9A0000",
          }}
          className="my-10"
          showNextButton={false}
          showDonetButton={false}
          renderItem={({ item }) => {
            return (
              <View
                className={`w-full h-40 rounded-3xl  bg-gray-200 p-10 mx-2`}
              >
                <Text>{item.title} </Text>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
}
