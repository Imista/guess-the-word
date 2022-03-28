const getSeconds = (level) => {
    switch(level){
        case 1:
            return 80000;
        case 2:
            return 70000;
        case 3:
            return 60000;
        default:
            return 40000;
    }
}

export default getSeconds;