import isComplete from "@validators/isComplete.validator";
import getValue from "@utils/getValue.utils";
import howMuchEqual from "@validators/howMuchEqual.validator";
import setDisable from "@utils/setDisable.utils";
import createPopUp from "@templates/createPopUp.template";
import isCorrect from "@validators/isCorrect.validator";
import createInputs from "@templates/createInputs.templates";
import setNewCategory from "@utils/setNewCategory.utils";
import showCategory from "@templates/showCategory.templates";


const controlWords = (Box,inputs,button) => {
    const word = Box.word;
    console.log(word);//To delete
    const disable = setDisable(inputs,button);
    Box.toDisableInput = disable;

    button.addEventListener('click', () => {
        if(isComplete(inputs)){
            const value = getValue(inputs);
            const hint = howMuchEqual(word,value,disable);
            button.disabled = true;

            //Is correct?
            if(isCorrect(hint)){
                Box.disableTimer();
                //Need new category?
                console.log(Box.count);
                if(Box.count >= 3){
                    setNewCategory(Box);
                    const coffeePopUp = () => {
                        createInputs(Box,true);
                        showCategory(Box);
                    }

                    createPopUp(word, () => createPopUp(null, () => coffeePopUp()));
                }else{
                    createPopUp(word, () => createInputs(Box,true));
                }
            }else{
                createInputs(Box);
            }
        }else{
            //Error text
        }
    });
}

//Export
export default controlWords;