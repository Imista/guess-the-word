//Import
import loopWord from "@logic/loopWord.logic";
import controlWords from "@handlers/controlWords.handler";

const getWord = loopWord();
controlWords(getWord);