import categoryData from "../data/categoryData.data";
import showCategory from "../templates/showCategory.templates";
import setCategory from "../utils/setCategory.utils"

const createGame = () => {
    //Category
    const head = document.querySelector('.header');
    const categories = categoryData();
    const category = setCategory(categories);
    showCategory(head,categories,category);
}

export default createGame;