import { formInsert } from "./forms/insert.js";
import { formUpdate } from "./forms/update.js";
import { formSetOrder } from "./forms/setOrder.js";
import { eventForm } from "./forms/eventsForm/events.js";
import { eventsButtons } from "./forms/eventsForm/eventsButtons.js";
import { viewInf } from "./forms/view.js";
import { btnDownload } from "./forms/addButton/buttonDownload.js";

function drawPos(context) {
    // console.log(context.actPosition)
    switch(context.actPosition){
        case 0: 
            formInsert(context.options[context.actPosition]);
            context.useStyle = true;
            btnDownload(false)
            eventsButtons();
            eventForm();
        break;
        case 1: 
            formUpdate(context.options[context.actPosition]);
            context.useStyle = true;
            btnDownload(false)
            eventsButtons();
            eventForm();
        break;
        case 2: 
            formSetOrder(context.options[context.actPosition]);
            context.useStyle = true;
            btnDownload(false)
            eventsButtons();
            eventForm();
        break;
        case 3: 
            viewInf(context.options[context.actPosition]);
            context.useStyle = true;
            btnDownload(true)
            eventsButtons();
        break;
    };
};
export {drawPos};