import createInputs from "@templates/createInputs.templates";
import isCorrect from "./isCorrect.validator";

const howMuchEqual = (word, letters,setDisable,createWord) => {
    const hint = [];


    for (let i = 0; i < word.length; i++) {
        const isEqual = (word[i] === letters[i]);
        //O
        if(isEqual){
            hint.push('O');
        }else{
            const isContained = word.includes(letters[i]);
            if(isContained){
                hint.push('-');
            }else
                hint.push('X');
        }
    }
    setDisable(hint);

    //Everything is ok?
    if(isCorrect(hint)){
        createInputs(createWord,true);
    }else{
        createInputs(createWord,false,word);
    }
}

export default howMuchEqual;