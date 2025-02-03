import React, { useEffect, useState } from "react";
import { Card, IconButton, Text, useTheme } from "react-native-paper";
import { WordData } from "../../types/types";
import { StyleSheet } from "react-native";
import useFavorite from "../../hooks/useFavorite";

interface WordBannerProps {
  data: WordData;
}

const WordBanner: React.FC<WordBannerProps> = ({ data }) => {
  const { favorites, saveFavorites, loadFavorites } = useFavorite();
  const [isFavorite, setIsFavorite] = useState(false);

  const { colors } = useTheme();

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    setIsFavorite(favorites.includes(data.word));
  }, [favorites, data, isFavorite]);

  return (
    <Card style={[styles.banner, { backgroundColor: colors.primary }]}>
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
    height: 250,
    borderWidth: 2,
    borderRadius: 20,

    margin: 10,

    position: "relative",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    height: "100%",
  },

  favoriteIcon: {
    position: "absolute",
    bottom: 5,
    right: 5,
  },
});
