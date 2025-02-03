import React from "react";
import { Card, Text } from "react-native-paper";
import { WordData } from "../../types/types";
import { StyleSheet, View } from "react-native";

interface WordBannerProps {
  data: WordData;
}

const WordBanner: React.FC<WordBannerProps> = ({ data }) => {
  return (
    <Card style={styles.banner}>
      <Card.Content>
        <Text variant="displaySmall">{data.word}</Text>
        <Text variant="headlineSmall">{data.phonetic}</Text>
      </Card.Content>
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
  },
});
