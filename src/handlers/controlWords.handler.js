import isComplete from "@validators/isComplete.validator";
import getValue from "@utils/getValue.utils";
import howMuchEqual from "../validators/howMuchEqual.validator";

const controlWords = (getWord) => {
    const button = document.querySelector('button');
    const inputs = document.querySelectorAll('.word-letter');

    button.addEventListener('click', () => {
        if(isComplete(inputs)){
           howMuchEqual(getWord(),getValue(inputs));
        }else{
            //Error text
        }
    });
}

//Export
export default controlWords;