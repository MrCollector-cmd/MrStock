import { reqCartelera } from "../reqCartelera.js";

function eventsButtons(context) {
    let button = document.querySelectorAll('.btnOrder');
    button.forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            if (e.currentTarget.classList.contains('deleteOrder')) {
                let order = context.pedidos.find(elem=> elem.id_pedido == e.currentTarget.id)
                let i = context.pedidos.findIndex(elem=> elem.id_pedido == e.currentTarget.id)
                order.operation = 'borrar';
                reqCartelera(order)
                context.pedidos.splice(i,1);
            }else{
                let order = context.pedidos.find(elem=> elem.id_pedido = e.currentTarget.id)
                let i = context.pedidos.findIndex(elem=> elem.id_pedido == e.currentTarget.id)
                order.operation = 'agregar';
                reqCartelera(order)
                context.pedidos.splice(i,1);
            }
        });
    });
};
export {eventsButtons}