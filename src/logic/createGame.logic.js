import categoryData from "@data/categoryData.data";
import wordData from "@data/wordData.data";
import showCategory from "@templates/showCategory.templates";
import setCategory from "@utils/setCategory.utils"
import setWord from "@utils/setWord.utils";
import loopWord from "./loopWord.logic";

const createGame = () => {
    //Category
    const head = document.querySelector('.header');
    const categories = categoryData();
    const category = setCategory(categories);
    showCategory(head,categories,category);

    //Word
    const words = wordData(category);
    const word = setWord(words);
    loopWord(word);
}

export default createGame;