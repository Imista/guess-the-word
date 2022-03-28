import TutorialBox from "@class/TutorialBox.class";
import getNumber from "@utils/getNumber.utils";

const tutorialControl = () => {
    const tutorialBox = new TutorialBox();
    tutorialBox.toNewChange = changeWord(tutorialBox);
    tutorialBox.toNewSet = tutorialSetWord(tutorialBox);
    tutorialBox.toChangePartB = changeWordPartB(tutorialBox);
    tutorialBox.toTimer = tutorialTimerControl(tutorialBox);
    tutorialBox.toCategory = tutorialCategory(tutorialBox);
}
//Change word
const changeWord = (tutorialBox) => () => setInterval(() => {
    const size = tutorialBox.sizeLetters;
    for (let i = 0; i < 4; i++) {
        tutorialBox.spaces[i].innerText  = tutorialBox.letters[getNumber(size)];
    }
},200);
const changeWordPartB = (tutorialBox) => () => setInterval(() => {
    const size = tutorialBox.sizeLetters;
    for (let i = 0; i < 3; i++) {
        tutorialBox.spacesB[i].innerText  = tutorialBox.letters[getNumber(size)];
    }
},1000);
//Set word
const tutorialSetWord = (tutorialBox) =>  () => setTimeout(() => {
    clearInterval(tutorialBox.change);
    getFeedback(tutorialBox);
},4000)
//Get feedback
const getFeedback = (tutorialBox) => {
    const word = [];
    const spaces = tutorialBox.spaces;
    const key = tutorialBox.key;
    //Fill
    for (let i = 0; i < 4; i++) {
        word.push(spaces[i].innerText);
    }
    //Validator
    for(let i = 0; i < word.length; i++){
        const isEqual = (word[i] === key[i]);
        spaces[i].classList.toggle('disable');
        //Good
        if(isEqual){
            spaces[i].classList.toggle('correct');
        }else{
            const isContained = key.includes(word[i]);
            if(isContained){
                spaces[i].classList.toggle('partial');
            }
        }
    }
    //End
    setTimeout(() =>{
        for(let i = 0; i < word.length; i++){
            spaces[i].classList.toggle('disable');
            spaces[i].classList.remove('correct');
            spaces[i].classList.remove('partial');
        }
        tutorialBox.changeWord();
        tutorialBox.setWord();
    }
    ,3000)
}
//Timer
const tutorialTimerControl = (tutorialBox) => {
    const bar = tutorialBox.timer;
    const seconds = 7000;
    const times = 200;
    const speed = seconds/times;
    const toAdd = speed*100/seconds;
    let percentaje = 0;
    //Bar
    return setInterval(() => {
        percentaje += toAdd;
        bar.style.width = `${percentaje}%`;

        if(percentaje >= 100){
            percentaje = 0;
        }
    }, speed);
}
//Category
const tutorialCategory = (tutorialBox) => {
    const categories = ['Frutas','Marcas','Colores','Vehiculos','Redes sociales','Deportes','Astronomia','Signo zodiacal'];
    const text = tutorialBox.categoryText;
    return setInterval(() => {
        text.innerHTML = `<i>${categories[getNumber(categories.length)]}</i>`
    }, 800);
}

export default tutorialControl;