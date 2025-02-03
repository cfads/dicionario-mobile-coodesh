import { useQuery } from "react-query";

import { fetchWordDefinition } from "../services/dictionaryService";
import { WordData } from "../types/types";

export const useWordDefinition = (word: string) => {
  return useQuery<WordData, Error>(
    ["wordDefinition", word],
    () => fetchWordDefinition(word),
    {
      enabled: !!word,
    }
  );
};
