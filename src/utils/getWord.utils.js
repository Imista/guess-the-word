//Import
import getNumber from "./getNumber.utils";

//Function
const getWord = () => {
    //When I have a data base, here will create the conection
    const words = ['Limon','Fresa','Melon','Mango'];

    return words[getNumber(words.length)];
}

//Export
export default getWord;