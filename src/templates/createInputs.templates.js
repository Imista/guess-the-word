import controlWords from "@handlers/controlWords.handler";
import inputControl from "@handlers/inputControl.handler";

const createInputs = (createWord, isReset = false,repeatWord = undefined) => {
    //Set Word
    let word = '';
    if(!repeatWord){
        word = createWord();
    }else{
        word = repeatWord;
    }
    
    //Const
    const times = word.length;
    const main = document.querySelector('.main') || null;
    const div = document.createElement('div');
    div.classList.add('try');
    const form =  document.createElement('form');

    if(isReset) {
        main.innerHTML = '';
    }
    
    //Create
    const inputs = [];
    const contents = [];
    for(let i = 0;i < times;i++){
        //Content
        const content = document.createElement('div');
        content.classList.add('word-content');
        //Input
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('word-letter');
        //Add & Push
        content.appendChild(input);
        inputs.push(input);
        contents.push(content);
    }

    //Add
    const button = document.createElement('button');
    button.innerHTML = '>';
    button.type = 'button';
    
    contents.map(content => form.appendChild(content));
    
    div.appendChild(form);
    div.appendChild(button);
    main.appendChild(div);

    //Control
    inputControl(inputs,button);
    controlWords(word,inputs,button,createWord);
}

export default createInputs;