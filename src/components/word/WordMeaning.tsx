import { Chip, Divider, Text, useTheme } from "react-native-paper";
import { StyleSheet, View } from "react-native";

import { WordData } from "../../types/types";
import { capitalize } from "../../utils/formatStrings";
import WordDefinitions from "./WordDefinitions";

interface WordBannerProps {
  data: WordData;
}

const WordMeaning: React.FC<WordBannerProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Meanings</Text>

      {data.meanings.map((word, key) => (
        <View key={key} style={styles.itemSpeech}>
          <View style={styles.chipContainer}>
            <Chip style={styles.partOfSpeech}>
              <Text>{capitalize(word.partOfSpeech)}</Text>
            </Chip>
          </View>
          <WordDefinitions definitions={word.definitions} />
        </View>
      ))}
    </View>
  );
};

export default WordMeaning;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  partOfSpeech: {
    marginVertical: 24,
    backgroundColor: "#3ED1D2",
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  itemSpeech: {
    marginVertical: 20,
  },
});
