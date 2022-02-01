//Import
import createInputs from "@templates/createInputs.templates";

//Function
const loopWord = (word) => {
    createInputs(word.length, word, true);
}

//Export
export default loopWord;