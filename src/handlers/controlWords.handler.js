import isComplete from "@validators/isComplete.validator";
import getValue from "@utils/getValue.utils";
import howMuchEqual from "@validators/howMuchEqual.validator";
import setDisable from "@utils/setDisable.utils";

const controlWords = (word,inputs,button,createWord) => {
    // console.log(createWord);

    button.addEventListener('click', () => {
        if(isComplete(inputs)){
            const value = getValue(inputs);
            howMuchEqual(word,value,setDisable(inputs,button),createWord);
            button.disabled = true;
        }else{
            //Error text
        }
    });
}

//Export
export default controlWords;