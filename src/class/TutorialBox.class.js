class TutorialBox{
    
    constructor(){
        TutorialBox.box = this;
        this._spaces = document.querySelectorAll('.tutorial-word');
        this._spacesB = document.querySelectorAll('.partB') || null;
        this._timer = document.querySelector('.tutorial-timer-bar') || null;
        this._categoryText = document.querySelector('.tutorial-category-text') || null;
        this._key = 'CAFE';
        this._letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this._newChange = null;
        this._newSet = null;
        this._changeWord = null;
        this._setWord = null;
        this._changePartB = null;
        this._controlTimer = null;
        this._controlCategory = null;
    }
    //Set
    set toNewChange(fn){
        this._newChange = fn;
        this._changeWord = this._newChange();
    }
    set toChangePartB(fn){
        this._changePartB = fn;
        this._changePartB();
    }
    set toNewSet(fn){
        this._newSet = fn;
        this._setWord = this._newSet();
    }
    set toTimer(fn){
        this._controlTimer = fn;
    }
    set toCategory(fn){
        this._controlCategory = fn;
    }
    //Get
    get spaces(){
        return this._spaces;
    }
    get spacesB(){
        return this._spacesB;
    }
    get timer (){
        return this._timer;
    }
    get key(){
        return this._key;
    }
    get letters(){
        return this._letters;
    }
    get sizeLetters(){
        return this._letters.length;
    }
    get change(){
        return this._changeWord;
    }
    get categoryText(){
        return this._categoryText;
    }
    //Functions
    changeWord(){
        this._changeWord = this._newChange();
    }
    setWord(){
        this._setWord = this._newSet();
    }
}

export default TutorialBox;