import { confirmSegure } from "../../controllerReq/segure.js";
import { reqController } from "../../controllerReq/reqController.js";
function eventForm() {
    let form = document.querySelector('form');
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        let buttonId = document.querySelector('.optSelected');
        const dat = Object.fromEntries(new FormData(e.currentTarget));

        dat.operation = buttonId.id;
        if(confirmSegure(dat)){
            reqController(dat)
            console.log('exito')
        }else{
            console.log('Faltan datos')
        }
    })
};
export {eventForm};