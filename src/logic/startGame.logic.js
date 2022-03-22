import GameBox from "@class/GameBox.class";
import categoryData from "@data/categoryData.data";
import showCategory from "@templates/showCategory.templates";
import showFooter from "@templates/showFooter.templates";
import createInputs from "@templates/createInputs.templates";
import createTimer from "@templates/createTimer.templates";
import gamePreparation from "@utils/gamePreparation.utils";

const startGame = () => {
    //Reset html
    gamePreparation();
    //Categories
    const categories = categoryData();
    //Word
    const Box = new GameBox(categories);

    //Header
    showCategory(Box);
    const timer = document.querySelector('.timer');
    createTimer(timer);

    //Word
    createInputs(Box,true);

    //Footer
    const footer = document.querySelector('footer');
    footer.innerHTML = showFooter();
}

export default startGame;