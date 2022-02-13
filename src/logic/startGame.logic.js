import GameBox from "../class/GameBox.class";
import categoryData from "@data/categoryData.data";
import setCategory from "@utils/setCategory.utils";
import wordData from "@data/wordData.data";
import showCategory from "@templates/showCategory.templates";
import showFooter from "@templates/showFooter.templates";
import createInputs from "@templates/createInputs.templates";
import createHeader from "@templates/createHeader.templates";

const startGame = () => {
    //Categories
    const categories = categoryData();
    const category = setCategory(categories);
    //Word
    const words = wordData(category);
    const Box = new GameBox(category,words);

    //Header
    const head = document.querySelector('.header');
    const timer = document.querySelector('.timer');
    const categoryCreator = showCategory(head,categories,category);
    createHeader(timer,categoryCreator);

    //Word
    createInputs(Box);

    //Footer
    const footer = document.querySelector('footer');
    footer.innerHTML = showFooter();
}

export default startGame;