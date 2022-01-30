//Import
import setWord from "@utils/setWord.utils";
import createInputs from "../utils/createInputs.utils";

//Function
const loopWord = () => {
    const word = setWord().toUpperCase();
    console.log(setWord().toUpperCase());
    console.log(setWord().toUpperCase());

    createInputs(word.length, word, true);
}

//Export
export default loopWord;