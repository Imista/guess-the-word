import setWord from "@utils/setWord.utils";

class GameBox{
    constructor(category,words){
        this._category = category;
        this._words = words;
        this._word = setWord(words);
        this._level = 1;
    }

    //Methods
    newLevel(){
        this._level ++;
    }
    newWord(){
        const index = this._words.indexOf(this._word);
        this._words.splice(index, 1);
        
        this._word = setWord(this._words);
    }


    //Get & Set
    get category(){
        return this._category;
    }
    set category(cat){
        this._category = cat;
    }
    set words(array){
        this._words = array;
    }
    get words(){
        return this._words;
    }
    get word(){
        return this._word;
    }
    get level(){
        return this._level;
    }
}

export default GameBox;