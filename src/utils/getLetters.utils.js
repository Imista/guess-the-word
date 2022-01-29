import isComplete from "../validators/isComplete.validator";
import getValue from "./getValue.utils";

const getLetters = () => {
    const button = document.querySelector('button');
    const inputs = document.querySelectorAll('.word-letter');

    button.addEventListener('click', () => {
        if(isComplete(inputs)){
            const values = getValue(inputs);

            values.map(x => console.log(x));
        }
    });
}

//Export
export default getLetters;