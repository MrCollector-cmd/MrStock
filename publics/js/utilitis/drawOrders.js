import { eventsButtons } from "./controllerCartelera.js/eventsCartelera/eventsButtons.js";
function drawOrders(context){
    let container = document.getElementById('pedidos');
    container.innerHTML = '';
    context.pedidos.forEach(element => {
        let html = `
        <div class="pedido row my-3 d-flex justify-content-center align-items-center" id="">
            <div class="d-flex flex-column align-items-center col-2">
                <h4 class="mx-4 mb-0 py-0 pb-0">${element.nombre}</h4>
            </div>
            <div class="d-flex flex-column align-items-center col-2">
                <h4 class="mx-3 mb-0 p-0 mx-1">${element.cantidad}</h4>
            </div>
            <div class="d-flex flex-column align-items-center col-2">
                <h4 class="mx-3 mb-0 p-0 mx-1">${element.unidad}</h4>
            </div>
            <div class="d-flex flex-row align-items-center col-4">
                <button id="${element.id_pedido}" class="btnAct btnP mx-1 deleteOrder btnOrder">Eliminar</button>
                <button id="${element.id_pedido}" class="btnAct btnP mx-1 confirmOrder btnOrder">Agregar</button>
            </div>
        </div>
        `;
        container.innerHTML += html;
    });
    let x = eventsButtons(context);
};
export {drawOrders};