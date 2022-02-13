import isComplete from "@validators/isComplete.validator";
import getValue from "@utils/getValue.utils";
import howMuchEqual from "@validators/howMuchEqual.validator";
import setDisable from "@utils/setDisable.utils";
import createPopUp from "@templates/createPopUp.template";
import isCorrect from "@validators/isCorrect.validator";
import createInputs from "@templates/createInputs.templates";


const controlWords = (word,inputs,button,createWord) => {
    button.addEventListener('click', () => {
        if(isComplete(inputs)){
            const value = getValue(inputs);
            const hint = howMuchEqual(word,value,setDisable(inputs,button));
            button.disabled = true;

            //Is correct?
            if(isCorrect(hint)){
                createPopUp(word, () => createInputs(createWord,true));
            }else{
                createInputs(createWord,false,word);
            }
        }else{
            //Error text
        }
    });
}

//Export
export default controlWords;