import isKey from "@validators/isKey.validator";

const inputControl = (inputs,button) => {
    inputs[0].select();

    //test
    const testText = document.querySelector('p');

    const final = inputs.length - 1;
    //Change
    for(let i = 0; i < (inputs.length - 1); i++){
        const input = inputs[i];
        input.addEventListener('keyup',(e) => {
            const key = input.value[1] || input.value[0];
            if(isKey(key)){//Key validator
                input.value = key;
                inputs[i+1].select();
            }else{
                input.value = "";
            }
            //Go back
            if(e.key === 'Backspace' && inputs[i-1]){
                inputs[i-1].select();
            }
        })
    }
        //Final
    inputs[final].addEventListener('keyup',(e) => {
        const input = inputs[final];
        const key = input.value[1] || input.value[0];
        if(isKey(key)){//Key validator
            input.value = key;
        }else{
            input.value = "";
        }
        //Prove
        if(e.key === 'Enter'){
            button.click();
        }
        //Go back
        if(e.key === 'Backspace'){
            inputs[final-1].select();
        }
    })
    //     //If is a letter
    //     if(e.keyCode >= 65 && e.keyCode <= 90){
    //         inputs[final].value = e.key;
    //     }else
    //     if(e.key === 'Enter'){
    //         button.click();
    //     }else{
    //         inputs[final].value = "";
    //     }
    //     if(e.key === 'Backspace'){
    //         inputs[final-1].select();
    //     } 
    // });
    //Empty
    for(let input of inputs){
        input.addEventListener('focus', (event) => {
            input.value = "";
        });
    }
}

export default inputControl;