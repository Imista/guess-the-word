import categoryData from "@data/categoryData.data";
import wordData from "@data/wordData.data";
import showCategory from "@templates/showCategory.templates";
import setCategory from "@utils/setCategory.utils"
import showFooter from "@templates/showFooter.templates";
import createWords from "@logic/createWords.logic";
import createInputs from "@templates/createInputs.templates";

const createGame = () => {
    //Category
    const head = document.querySelector('.header');
    const categories = categoryData();
    const category = setCategory(categories);
    showCategory(head,categories,category);

    //Word
    const words = wordData(category);
    const createWord = createWords(words);
    createInputs(createWord, true);

    //Footer
    const footer = document.querySelector('footer');
    footer.innerHTML = showFooter();
}

export default createGame;