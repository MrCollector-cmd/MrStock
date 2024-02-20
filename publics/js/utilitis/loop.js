import { refreshCartelera } from "./cartelera.js";
import { controllerSec } from "./controllerSections.js";
import { drawOrders } from "./drawOrders.js";
import { drawPos } from "./drawPosition.js";

const context = {
    options: ['insert','update','setOrder','view'],
    actPosition: 0,
    useStyle:true,
    useOneAct:false,
    pedidos:[],
    contAct: 0,
}
let mainLoop = {
    lastReg: 0,
    aps: 0,
    fps: 0,
    loop: function(regTemp) {
        mainLoop.idEjecucion = window.requestAnimationFrame(mainLoop.loop);

        mainLoop.refresh(regTemp);
        mainLoop.draw();
        

        if(context.contAct == 10){
            context.contAct = 0;
        }
        if (regTemp - mainLoop.lastReg > 999) {
            mainLoop.lastReg = regTemp;
             console.log('aps: '+ mainLoop.aps +" | "+" fps: "+mainLoop.fps);
            mainLoop.aps = 0;
            mainLoop.fps = 0;
            context.contAct++;
            drawOrders(context);
        };

    },
    stop:function(){

    },
    refresh:function(regTemp){
        if(mainLoop.aps == 30){
            controllerSec(context)
        };
        mainLoop.aps++;
    },
    draw:function(){
        if(context.useStyle){
            drawPos(context);
            refreshCartelera(context);
            drawOrders(context);
            context.useStyle = false;
        }if(context.contAct == 2){
            context.useOneAct = true;
            if (context.useOneAct) {
                refreshCartelera(context);
                drawOrders(context);
                context.contAct = false;
            };
        };
        mainLoop.fps++;
    }
};
export {mainLoop};