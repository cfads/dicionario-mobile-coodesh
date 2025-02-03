import { Text } from "react-native-paper";
import List from "../shared/List";
import { ScrollView, StyleSheet } from "react-native";
import { Word } from "../../types/types";
import ItemsNotFound from "../shared/ItemsNotFound";

interface WordListProps {
  data: Word[];
}

const Wordlist: React.FC<WordListProps> = ({ data }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title} variant="headlineLarge">
        Word list
      </Text>
      {data.length ? <List data={data} /> : <ItemsNotFound />}
    </ScrollView>
  );
};

export default Wordlist;

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
