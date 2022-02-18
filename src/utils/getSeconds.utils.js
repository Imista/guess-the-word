const getSeconds = (level) => {
    switch(level){
        case 1:
            return 60000;
        case 2:
            return 40000;
        case 3:
            return 20000;
    }
}

export default getSeconds;