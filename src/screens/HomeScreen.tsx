import { useState } from "react";
import { SegmentedButtons, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-navigation";

import Wordlist from "../components/wordlist/Wordlist";
import History from "../components/history/History";
import { StyleSheet } from "react-native";
import Favorites from "../components/favorites/Favorites";

const options = [
  {
    value: "wordlist",
    label: "Word list",
  },
  {
    value: "history",
    label: "History",
  },
  {
    value: "favorites",
    label: "Favorites",
  },
];

export default function HomeScreen() {
  const [tabs, setTabs] = useState("wordlist");

  return (
    <SafeAreaView>
      <SegmentedButtons
        value={tabs}
        onValueChange={setTabs}
        buttons={options}
        style={styles.segmentedbtn}
      />

      {tabs === "wordlist" && <Wordlist data={data} />}
      {tabs === "history" && <History data={data} />}
      {tabs === "favorites" && <Favorites data={data} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  segmentedbtn: {
    marginHorizontal: 25,
    marginTop: 15,
    marginBottom: 10,
  },
});

const data = [
  { id: 1, word: "abundance" },
  { id: 2, word: "adventure" },
  { id: 3, word: "airplane" },
  { id: 4, word: "ancient" },
  { id: 5, word: "art" },
  { id: 6, word: "apple" },
  { id: 7, word: "balance" },
  { id: 8, word: "banana" },
  { id: 9, word: "balloon" },
  { id: 10, word: "beauty" },
  { id: 11, word: "blue" },
  { id: 12, word: "breeze" },
  { id: 13, word: "bravery" },
  { id: 14, word: "butterfly" },
  { id: 15, word: "calm" },
  { id: 16, word: "calmness" },
  { id: 17, word: "cat" },
  { id: 18, word: "cherry" },
  { id: 19, word: "cloud" },
  { id: 20, word: "compassion" },
  { id: 21, word: "creativity" },
  { id: 22, word: "date" },
  { id: 23, word: "delight" },
  { id: 24, word: "dog" },
  { id: 25, word: "dream" },
  { id: 26, word: "eclipse" },
  { id: 27, word: "enlighten" },
  { id: 28, word: "energy" },
  { id: 29, word: "eternity" },
  { id: 30, word: "explore" },
];
