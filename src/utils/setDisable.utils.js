const setDisable = (inputs,button) => {
    return (hint) => {
        for(let i = 0; i < inputs.length;i++){
            const input = inputs[i];
            //Disable
            input.disabled = true;
            input.classList.toggle('disable');
            //Color
            if(hint[i] === 'O'){
                input.classList.add('correct');
            }
            if(hint[i] === '-'){
                input.classList.add('partial');
            }
        }
        button.disabled = true;
        button.classList.toggle('disable');
    }
}

export default setDisable;