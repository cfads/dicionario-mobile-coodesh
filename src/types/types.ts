export interface Phonetic {
  text: string;
  audio?: string;
}

export interface Definition {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

export interface WordData {
  word: string;
  phonetic?: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: string;
  sourceUrls: string;
}

export interface Word {
  id: number;
  word: string;
}
