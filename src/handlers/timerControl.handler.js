import getSeconds from "@utils/getSeconds.utils";
import createPopUp from "@templates/createPopUp.template";
import createInputs from "@templates/createInputs.templates";
import getHash from "@utils/getHash.utils";

const timerControl = (Box) => {
    const word = Box.word;
    const seconds = getSeconds(Box.level) + 4000;
    const bar = document.querySelector('.timer-bar');
    const times = 800;
    
    //Handler bar
    const speed = seconds/times;
    const toAdd = speed*100/seconds;
    let percentaje = 0;
    //Bar
    const progress = window.setInterval(() => {
        percentaje += toAdd;
        bar.style.width = `${percentaje}%`;

        if(word !== Box.word){
            clearInterval(progress);
        }
        
        if(percentaje >= 100){
            //Definy lose function-------------------------------------
            clearInterval(progress);
            Box.disableInput();
            createPopUp(Box.word, () => createInputs(Box,true));
        }
        //Cancel interval
        const route = getHash();
        if(route !== 'play'){
            clearInterval(progress);
            console.log(`Clear: ${word}`)
        }

    }, speed);
    //Funtions
    const clearFuntion = () => clearInterval(progress);
    Box.toDisableTimer = () => clearFuntion();
}

export default timerControl;