import axios from "axios";
import { Word } from "../types/types";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const fetchWordsList = async (): Promise<Word[]> => {
  try {
    const response = await api.get("/words");
    return response.data;
  } catch (error) {
    throw new Error("Falha ao realizar a requisição da lista de palavras");
  }
};
