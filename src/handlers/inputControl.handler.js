const inputControl = (inputs,button) => {
    inputs[0].select();

    const final = inputs.length - 1;
    //Change
    for(let i = 0; i < (inputs.length - 1); i++){
        inputs[i].addEventListener('keyup', (e) => {
            //If is a letter
            if(e.key.length === 1 && isNaN(e.key)){
                inputs[i].value = e.key;
                inputs[i+1].select();
            }else{
                inputs[i].value = "";
            }
            //Go back
            if(e.key === 'Backspace' && inputs[i-1]){
                inputs[i-1].select();
            }
        });
    }
        //Final
    inputs[final].addEventListener('keyup', (e) => {
        //If is a letter
        if(e.key.length === 1 && isNaN(e.key)){
            inputs[final].value = e.key;
        }else
        if(e.key === 'Enter'){
            button.click();
        }else{
            inputs[final].value = "";
        }
        if(e.key === 'Backspace'){
            inputs[final-1].select();
        }
        
    })
    //Empty
    for(let input of inputs){
        input.addEventListener('focus', (event) => {
            input.value = "";
        });
    }
}

export default inputControl;