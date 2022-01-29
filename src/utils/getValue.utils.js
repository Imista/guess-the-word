const getValue = (inputs) => {
    const values = [];
    for(let input of inputs){
        values.push(input.value);
    }

    return values;
} 

export default getValue;