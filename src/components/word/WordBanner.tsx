import React, { useEffect, useState } from "react";
import { Card, IconButton, Text } from "react-native-paper";
import { WordData } from "../../types/types";
import { StyleSheet, View } from "react-native";
import useFavorite from "../../hooks/useFavorite";

interface WordBannerProps {
  data: WordData;
}

const WordBanner: React.FC<WordBannerProps> = ({ data }) => {
  const { favorites, saveFavorites, loadFavorites } = useFavorite();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    setIsFavorite(favorites.includes(data.word));
  }, [favorites, data, isFavorite]);

  return (
    <Card style={styles.banner}>
      <Card.Content style={styles.content}>
        <Text variant="displaySmall">{data.word}</Text>
        <Text variant="headlineSmall">{data.phonetic}</Text>
      </Card.Content>
      <Card.Actions style={styles.favoriteIcon}>
        <IconButton
          icon="star"
          mode="contained-tonal"
          iconColor={isFavorite ? "yellow" : "gray"}
          size={48}
          onPress={() => saveFavorites(data.word)}
        />
      </Card.Actions>
    </Card>
  );
};

export default WordBanner;

const styles = StyleSheet.create({
  banner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3ED1D2",
    height: 250,
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
    gap: 20,
    position: "relative",
  },
  content: {
    alignItems: "center",
  },

  favoriteIcon: {
    position: "absolute",
    bottom: -80,
    right: -80,
  },
});
