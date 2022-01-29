//Import
import getNumber from "./getNumber.utils";

//Function
const setWord = () => {
    //When I have a data base, here will create the conection
    const words = ['Limon','Fresa','Melon','Mango'];

    return words[getNumber(words.length)];
}

//Export
export default setWord;