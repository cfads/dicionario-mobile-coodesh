import { Text } from "react-native-paper";
import List from "../shared/List";
import { ScrollView, StyleSheet } from "react-native";
import { Word } from "../../types/types";
import { useCallback, useEffect, useState } from "react";
import useFavorites from "../../hooks/useFavorite";
import { useFocusEffect } from "@react-navigation/native";

interface FavoritesProps {
  data: Word[];
}

const Favorites: React.FC<FavoritesProps> = ({ data }) => {
  const { favorites, loadFavorites } = useFavorites();
  const [wordsFiltered, setWordsFiltered] = useState<Word[]>([]);

  useEffect(() => {
    const filtered = data.filter((dataItem) =>
      favorites.includes(dataItem.word)
    );
    setWordsFiltered(filtered.reverse());
  }, [favorites, data]);

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [favorites])
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title} variant="headlineLarge">
        Favorites
      </Text>
      <List data={wordsFiltered} />
    </ScrollView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    marginBottom: 90,
    paddingHorizontal: 10,
  },
  title: {
    marginLeft: 15,
  },
});
