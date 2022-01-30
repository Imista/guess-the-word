const setDisable = (inputs,button) => {
    return () => {
        for(let input of inputs){
            input.disabled = true;
            input.classList.toggle('disable');
        }
        button.disabled = true;
        button.classList.toggle('disable');
    }
}

export default setDisable;