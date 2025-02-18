import { Text } from "react-native-paper";
import List from "../shared/List";
import { ScrollView, StyleSheet } from "react-native";
import { Word } from "../../types/types";
import useHistory from "../../hooks/useHistory";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import ItemsNotFound from "../shared/ItemsNotFound";

interface HistoryProps {
  data: Word[];
}

const History: React.FC<HistoryProps> = ({ data }) => {
  const { history, loadHistory } = useHistory();
  const [wordsFiltered, setWordsFiltered] = useState<Word[]>([]);

  useEffect(() => {
    const filtered = history.map((item) => {
      const newItem = data.find((dataItem) => dataItem.word === item);

      return {
        id: newItem?.id ?? -1,
        word: newItem?.word ?? "",
      };
    });

    setWordsFiltered(filtered.reverse());
  }, [history, data]);

  useFocusEffect(
    useCallback(() => {
      loadHistory();
    }, [history])
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title} variant="headlineLarge">
        History
      </Text>
      {wordsFiltered.length ? <List data={wordsFiltered} /> : <ItemsNotFound />}
    </ScrollView>
  );
};

export default History;

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
