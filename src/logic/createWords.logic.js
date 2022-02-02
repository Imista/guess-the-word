import setWord from "@utils/setWord.utils";


const createWords = (words) => {
    const getWord = () => {
        const word = setWord(words);

        //Get index
        const index = words.indexOf(word);
        words.splice(index, 1);
    
        return word;
    }
    return getWord;
}

export default createWords;