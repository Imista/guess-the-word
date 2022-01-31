function* createIndex(length){
    const max = length - 1;
    let index = 0;
    while (true) {
        if(index === max){
            index = 0;
        }else{
            index ++;
        }
        yield index;
    }
}

export default createIndex;