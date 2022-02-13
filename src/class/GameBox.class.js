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
        const index = this.words.indexOf(this.word);
        words.splice(this.index, 1);

        this._word = setWord(this._words);
        
        console.log('New word');
    }


    //Get & Set
    get category(){
        return this._category;
    }
    set category(cat){
        this._category = cat;
    }
    set words(w){
        this._words = w;
    }
    get word(){
        return this._word;
    }
    get level(){
        return this._level;
    }
}

export default GameBox;