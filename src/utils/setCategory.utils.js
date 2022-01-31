//Import
import getNumber from "./getNumber.utils";

//Function
const setCategory = (categories) => {

    return categories[getNumber(categories.length)];
}

//Export
export default setCategory;