//Import
import setWord from "@utils/setWord.utils";

//Function
const loopWord = () => {
    const word = setWord();
    const form = document.querySelector('form');
    
    form.innerHTML = "";
    for(let i = 0;i < word.length;i++){
        form.innerHTML += `<input type="text" class="word-letter">`;
    }

    return () => word.toUpperCase();
}

//Export
export default loopWord;