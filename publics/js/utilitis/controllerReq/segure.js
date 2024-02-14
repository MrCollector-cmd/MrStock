import { capWords } from "../tools/capWords.js";
function confirmSegure(dat) {
    let key = false;
    console.log(dat)
    if(dat.nombre !== ''){
        dat.nombre = capWords(dat.nombre);
        key = true;
    }else{
        key = false;
    }
    if(dat.unidad !== undefined){
        if(dat.unidad !== ''){
            dat.unidad = capWords(dat.unidad);
            key = true;
        }else{
            key = false;
        }
    }
    return key;
};
export {confirmSegure};