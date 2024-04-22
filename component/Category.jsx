import { View, Text, FlatList } from "react-native";
import React from "react";
import CategoryCart from "./CategoryCart";

export default function Category({ data }) {
  // const data = [
  //   {
  //     title: "Goutés",
  //     temps: "25 min",
  //     image: require("../assets/category/Goutés.png"),
  //   },
  //   {
  //     title: "Grillades",
  //     temps: "60 min",
  //     image: require("../assets/category/Grillades.png"),
  //   },
  //   {
  //     title: "Braisé",
  //     temps: "60 min",
  //     image: require("../assets/category/Grillades.png"),
  //   },
  //   {
  //     title: "Boissons",
  //     temps: "15 min",
  //     image: require("../assets/category/Boissons.png"),
  //   },
  //   {
  //     title: "Accompagnement",
  //     temps: "25 min",
  //     image: require("../assets/category/Acompagnement.png"),
  //   },
  // ];
  return (
    <>
      <FlatList
        data={data}
        horizontal={true} // Définir la FlatList comme horizontale
        renderItem={({ item }) => <CategoryCart data={item} />}
        className="my-5"
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
}
