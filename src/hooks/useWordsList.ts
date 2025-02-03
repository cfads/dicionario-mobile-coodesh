import { useQuery } from "react-query";

import { Word } from "../types/types";
import { fetchWordsList } from "../services/wordsService";

export const useWordsList = () => {
  return useQuery<Word[], Error>(["wordsList"], () => fetchWordsList());
};
