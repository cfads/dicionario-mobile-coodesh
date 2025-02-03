import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type HistoryType = string[];

const useHistory = () => {
  const [history, setHistory] = useState<HistoryType>([]);

  const loadHistory = async () => {
    try {
      const historyString = await AsyncStorage.getItem("history");
      const historyArray: HistoryType = historyString
        ? JSON.parse(historyString)
        : [];
      setHistory(historyArray);
    } catch (error) {
      console.error("Erro ao carregar histórico", error);
    }
  };

  const saveHistory = async (palavra: string) => {
    try {
      const historyString = await AsyncStorage.getItem("history");
      const historyArray: HistoryType = historyString
        ? JSON.parse(historyString)
        : [];

      historyArray.push(palavra);
      await AsyncStorage.setItem("history", JSON.stringify(historyArray));
      setHistory(historyArray);
    } catch (error) {
      console.error("Erro ao salvar histórico", error);
    }
  };

  return { history, loadHistory, saveHistory };
};

export default useHistory;
