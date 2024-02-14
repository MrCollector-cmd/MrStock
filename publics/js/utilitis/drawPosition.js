import { formInsert } from "./forms/insert.js";
import { formUpdate } from "./forms/update.js";
import { formSetOrder } from "./forms/setOrder.js";
import { eventForm } from "./forms/eventsForm/events.js";
import { eventsButtons } from "./forms/eventsForm/eventsButtons.js";

function drawPos(context) {
    // console.log(context.actPosition)
    switch(context.actPosition){
        case 0: 
            formInsert(context.options[context.actPosition]);
            context.useStyle = true;
            eventsButtons();
            eventForm();
        break;
        case 1: 
            formUpdate(context.options[context.actPosition]);
            context.useStyle = true;
            eventsButtons();
            eventForm();
        break;
        case 2: 
            formSetOrder(context.options[context.actPosition]);
            context.useStyle = true;
            eventsButtons();
            eventForm();
        break;
    };
};
export {drawPos};