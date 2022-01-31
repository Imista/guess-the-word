import setRandomCategory from "../utils/setRandomCategory.utils";

const categoryControl = (categories,category,text) => {
    const getText = setRandomCategory(categories,category,text);
    getText(16);
}

export default categoryControl;