import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type FavoriteType = string[];

const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteType>([]);

  const loadFavorites = async () => {
    try {
      const favoriteString = await AsyncStorage.getItem("favorite");
      const favoriteArray: FavoriteType = favoriteString
        ? JSON.parse(favoriteString)
        : [];
      setFavorites(favoriteArray);
    } catch (error) {
      console.error("Erro ao carregar histórico", error);
    }
  };

  const saveFavorites = async (palavra: string) => {
    try {
      const favoriteString = await AsyncStorage.getItem("favorite");
      const favoriteArray: FavoriteType = favoriteString
        ? JSON.parse(favoriteString)
        : [];

      if (favoriteArray.includes(palavra)) {
        const index = favoriteArray.indexOf(palavra);
        if (index > -1) {
          favoriteArray.splice(index, 1);
        }
      } else {
        favoriteArray.push(palavra);
      }
      await AsyncStorage.setItem("favorite", JSON.stringify(favoriteArray));
      setFavorites(favoriteArray);
    } catch (error) {
      console.error("Erro ao salvar histórico", error);
    }
  };

  return { favorites, loadFavorites, saveFavorites };
};

export default useFavorites;
