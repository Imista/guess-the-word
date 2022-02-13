// import categoryData from "@data/categoryData.data";
// import setCategory from "@utils/setCategory.utils"
// import wordData from "@data/wordData.data";
// import showCategory from "@templates/showCategory.templates";
// import showFooter from "@templates/showFooter.templates";
// import createWords from "@logic/createWords.logic";
// import createInputs from "@templates/createInputs.templates";
// import createHeader from "@templates/createHeader.templates";

// const createGame = () => {
//     //Category
//     const head = document.querySelector('.header');
//     const timer = document.querySelector('.timer');
//     const categories = categoryData();
//     const category = setCategory(categories);
//     const categoryCreator = showCategory(head,categories,category);
//     createHeader(timer,categoryCreator);

//     //Word
//     const words = wordData(category);
//     const createWord = createWords(words);
//     createInputs(createWord, true);

//     //Footer
//     const footer = document.querySelector('footer');
//     footer.innerHTML = showFooter();
// }

// export default createGame;