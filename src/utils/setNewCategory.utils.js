import setCategory from "@utils/setCategory.utils";

const setNewCategory = (Box) => {
    const current_category = Box.category;
    let category = '';

    do{
        category = setCategory(Box.categories);
        console.log(category);//----------------------------
    }while(category === current_category);
    //Set changes
    Box.category = category;
    Box.newLevel();
}

export default setNewCategory;