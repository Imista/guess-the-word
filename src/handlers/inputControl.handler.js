const inputControl = (inputs) => {
    const final = inputs.length - 1;
    //Change
    for(let i = 0; i < (inputs.length - 1); i++){
        inputs[i].addEventListener('keyup', (e) => {
            //If is a letter
            if(e.key.length === 1){
                inputs[i].value = e.key;
                inputs[i+1].select();
            }
        });
    }
        //Final
    inputs[final].addEventListener('keyup', (e) => {
        //If is a letter
        if(e.key.length === 1){
            inputs[final].value = e.key;
        }
        if(e.key === " "){
            inputs[final].value = "";
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