import { useState } from "react";
import { SegmentedButtons, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-navigation";

import Wordlist from "../components/wordlist/Wordlist";
import History from "../components/history/History";
import { StyleSheet } from "react-native";
import Favorites from "../components/favorites/Favorites";

import { dataMock } from "../../mocks/mock";

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

      {tabs === "wordlist" && <Wordlist data={dataMock} />}
      {tabs === "history" && <History data={dataMock} />}
      {tabs === "favorites" && <Favorites data={dataMock} />}
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
