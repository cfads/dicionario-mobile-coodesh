import axios from "axios";
import { WordData } from "../types/types";

const api = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/",
});

export const fetchWordDefinition = async (word: string): Promise<WordData> => {
  try {
    const response = await api.get(word);
    return response.data[0];
  } catch (error) {
    throw new Error(
      `Falha ao realizar requisição para definição da palavra ${word}`
    );
  }
};
