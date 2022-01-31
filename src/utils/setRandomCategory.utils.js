import createIndex from "./createIndex.utils";

const setRandomCategory = (array,category,text) =>{
    const getIndex = createIndex(array.length);
    const loop = (times, cont = 0) => {
        setTimeout(() => {
            text.innerText = array[getIndex.next().value];
            if(cont < times){
                cont++;
                loop(times,cont);
            }else{
                text.innerText = category;
            }
        },250);
    }
    return loop;
}

export default setRandomCategory;