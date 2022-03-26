import setCategory from "@utils/setCategory.utils";
import setWord from "@utils/setWord.utils";
import wordData from "@data/wordData.data";

class GameBox{

    constructor(categories){
        this._categories = categories;
        this._category = setCategory(this._categories);
        this._words = wordData(this._category);
        this._word = null;
        this._level = 1;
        this._count = 0;
        this._disableFunction = () => console.log('Hello disable');
        this._timerFunction = () => console.log('Hello timer');
    }

    //Methods---------------------------------------
    newLevel(){
        this._level ++;
        this._count = 0;
        this._words = wordData(this._category);
    }
    newWord(){
        const index = this._words.indexOf(this._word);
        this._words.splice(index, 1);
        this._count ++;
        
        this._word = setWord(this._words);
    }
    disableInput(){
        this._disableFunction();
    }
    disableTimer(){
        this._timerFunction();
    }
    //Get--------------------------------------
    get categories(){
        return this._categories;
    }
    get category(){
        return this._category;
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
    get count(){
        return this._count;
    }
    //Set------------------------------
    set category(cat){
        this._category = cat;
    }
    set words(array){
        this._words = array;
    }
    set toDisableInput(disable){
        this._disableFunction = disable;
    }
    set toDisableTimer(disable){
        this._timerFunction = disable;
    }
    

}

export default GameBox;