import getNumber from "@utils/getNumber.utils";

const backgroundControl = () => {
    const keys = document.querySelectorAll('li');
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //First
    for(let key of keys){
        key.innerHTML = letters[getNumber(letters.length)];
    }
    //Interval
    setInterval(() => {
        for(let key of keys){
            if(getNumber(1) === 0){
                key.innerHTML = letters[getNumber(letters.length)];
            }
        }
    },2000)
}

export default backgroundControl;