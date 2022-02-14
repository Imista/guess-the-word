import GameBox from "@class/GameBox.class";
import categoryData from "@data/categoryData.data";
import setCategory from "@utils/setCategory.utils";
import wordData from "@data/wordData.data";
import showCategory from "@templates/showCategory.templates";
import showFooter from "@templates/showFooter.templates";
import createInputs from "@templates/createInputs.templates";
import createTimer from "@templates/createTimer.templates";

const startGame = () => {
    //Categories
    const categories = categoryData();
    const category = setCategory(categories);
    //Word
    const words = wordData(category);
    const Box = new GameBox(category,words);

    //Header
    const categoryContent = document.querySelector('.category');
    showCategory(categoryContent,categories,category);
    const timer = document.querySelector('.timer');
    createTimer(timer);

    //Word
    createInputs(Box,true);

    //Footer
    const footer = document.querySelector('footer');
    footer.innerHTML = showFooter();
}

export default startGame;