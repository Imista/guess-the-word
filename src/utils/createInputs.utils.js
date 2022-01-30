import controlWords from "../handlers/controlWords.handler";

const createInputs = (times, word, isReset = false) => {
    const main = document.querySelector('main');
    const form =  document.createElement('form');
    if(isReset) {
        main.innerHTML = '';
    }
    
    const inputs = []
    for(let i = 0;i < times;i++){
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('word-letter')
        inputs.push(input);
    }

    const button = document.createElement('button');
    button.innerHTML = '>';
    button.type = 'button';
    
    inputs.map(input => form.appendChild(input));
    form.appendChild(button);

    main.appendChild(form);

    controlWords(word,inputs,button)
}

export default createInputs;