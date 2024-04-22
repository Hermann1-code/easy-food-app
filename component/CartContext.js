import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native"; // Importer le composant ActivityIndicator

import { apiUrl } from "../lib/config";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false); // État pour contrôler le chargement

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true); // Définir l'état de chargement sur true au début du chargement des données

      const userToken = await AsyncStorage.getItem("userToken");

      if (userToken) {
        const response = await axios.get(`${apiUrl}/api/cart`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        setCartItems(response.data.items);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Définir l'état de chargement sur false une fois les données chargées
    }
  };

  const addToCart = async (product) => {
    try {
      setLoading(true); // Définir l'état de chargement sur true avant l'ajout au panier

      const userToken = await AsyncStorage.getItem("userToken");
      const response = await axios.post(
        `${apiUrl}/api/cart/addToCart/${product._id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      // console.log(JSON.stringify(response.data));:
      fetchData(); // Supposant que response.data contient le tableau de produits
    } catch (error) {
      console.error(JSON.stringify(error.message));
    } finally {
      setLoading(false); // Définir l'état de chargement sur false après l'ajout au panier
    }
  };

  const decreaseQty = async (product) => {
    try {
      setLoading(true); // Définir l'état de chargement sur true avant la diminution de la quantité

      const userToken = await AsyncStorage.getItem("userToken");
      const response = await axios.post(
        `${apiUrl}/api/cart/desQty/${product._id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      // console.log(response.data);
      fetchData(); // Supposant que response.data contient le tableau de produits
    } catch (error) {
      console.error("Error desk to cart:", error);
    } finally {
      setLoading(false); // Définir l'état de chargement sur false après la diminution de la quantité
    }
  };

  return (
    <CartContext.Provider
      value={{ loading, cartItems, addToCart, decreaseQty, fetchData }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
