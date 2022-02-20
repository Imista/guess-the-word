const isKey = (key) => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    if(key){
        return letters.includes(key.toLowerCase());
    }
        return false;
}

export default isKey;