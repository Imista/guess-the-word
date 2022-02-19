import getSeconds from "@utils/getSeconds.utils";
import createPopUp from "@templates/createPopUp.template";
import createInputs from "@templates/createInputs.templates";

const timerControl = (Box) => {
    const seconds = getSeconds(Box.level) + 4000;
    const bar = document.querySelector('.timer-bar');
    const times = 800;
    
    //Handler bar
    const speed = seconds/times;
    const toAdd = speed*100/seconds;
    let percentaje = 0;
    //Bar
    const progress = setInterval(() => {
        percentaje += toAdd;
        bar.style.width = `${percentaje}%`;
        
        if(percentaje >= 100){
            //Definy lose function-------------------------------------
            clearInterval(progress);
            Box.disableInput();
            createPopUp(Box.word, () => createInputs(Box,true));
        }
    }, speed);
    Box.toDisableTimer = () => clearInterval(progress);
}

export default timerControl;