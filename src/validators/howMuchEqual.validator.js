const howMuchEqual = (word, letters,setDisable) => {
    const hint = [];


    for (let i = 0; i < word.length; i++) {
        const isEqual = (word[i] === letters[i]);
        //O
        if(isEqual){
            hint.push('O');
        }else{
            const isContained = word.includes(letters[i]);
            if(isContained){
                hint.push('-');
            }else
                hint.push('X');
        }
    }
    setDisable(hint);

    return hint;
}

export default howMuchEqual;