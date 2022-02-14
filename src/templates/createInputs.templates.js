import controlWords from "@handlers/controlWords.handler";
import timerControl from "@handlers/timerControl.handler";
import inputControl from "@handlers/inputControl.handler";

const createInputs = (Box, isReset = false) => {
    //Const
    const main = document.querySelector('.main') || null;
    const div = document.createElement('div');
    div.classList.add('try');
    const form =  document.createElement('form');
    
    //Set Word
    if(isReset) {
        main.innerHTML = '';
        Box.newWord();
        timerControl(Box);
    }
    
    const word = Box.word;
    const times = word.length;

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
    controlWords(Box,inputs,button);

}

export default createInputs;