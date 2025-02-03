import { StyleSheet, View } from "react-native";

import { Definition } from "../../types/types";
import { Divider, Text } from "react-native-paper";

interface WordDefinitionsProps {
  definitions: Definition[];
}

const WordDefinitions: React.FC<WordDefinitionsProps> = ({ definitions }) => {
  return definitions.map((definition, key) => (
    <View style={styles.container} key={key}>
      {definition.definition && (
        <Text>{`Definition #${key + 1}: ${definition.definition}`}</Text>
      )}
      {definition.example && <Text>{`Example: ${definition.example}`}</Text>}
      {definition.synonyms.length > 0 && (
        <Text>{`Synonyms: ${definition.synonyms.join(", ")}`}</Text>
      )}
      {definition.antonyms.length > 0 && (
        <Text>{`Antonyms: ${definition.antonyms.join(", ")}`}</Text>
      )}
      {key < definitions.length - 1 && <Divider style={styles.divider} />}
    </View>
  ));
};

export default WordDefinitions;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  divider: {
    marginVertical: 20,
  },
});
