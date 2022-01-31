//Import
import getNumber from "./getNumber.utils";

//Function
const setWord = (words) => {
    return words[getNumber(words.length)].toUpperCase();
}

//Export
export default setWord;