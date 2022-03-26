const getSeconds = (level) => {
    switch(level){
        case 1:
            return 2000;
        case 2:
            return 60000;
        case 3:
            return 40000;
        default:
            return 30000;
    }
}

export default getSeconds;