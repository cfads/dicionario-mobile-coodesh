import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";

import { Word } from "../types/types";
import WordBanner from "../components/word/WordBanner";
import { useWordDefinition } from "../hooks/useWordDefinition";
import WordMeaning from "../components/word/WordMeaning";

type WordScreenRouteProp = RouteProp<{ Word: Word }, "Word">;

const WordScreen = () => {
  const route = useRoute<WordScreenRouteProp>();
  const { word } = route.params;

  const { data, error, isLoading } = useWordDefinition(word);

  return (
    <ScrollView style={{ paddingVertical: 30 }}>
      {data && <WordBanner data={data} />}
      {data && <WordMeaning data={data} />}
    </ScrollView>
  );
};

export default WordScreen;
