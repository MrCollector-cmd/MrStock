async function enviar_post(dir, nomf, bool){
    const ajax = await new XMLHttpRequest();

    var form = document.getElementById(nomf);
    var param = new FormData(form);
    
    console.log(param);

    ajax.open('POST',dir, true);
    //ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajax.send(param);
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200 ){
            console.log(ajax.responseText);
        }
    };
    refreshHistory();
}
async function enviar_get(dir){
    const ajax =  await new XMLHttpRequest();
    
    ajax.open('GET',dir, true);
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200 ){
            let list = document.getElementById('cart');
            list.innerHTML = ajax.responseText;
        }
    };

    ajax.send();
}
refreshHistory = async ()=>{
    result = await new Promise((resolve) => {
        enviar_get("../req/reqPregPed.php");
    })
}
window.onload = ()=>{
    //agarra los elementos query
    let formStock = document.getElementById('stock');
    let formPedido = document.getElementById('pedido');
    let formDescuento = document.getElementById('descuento');
    let buttonStock = document.getElementById('stock_button');

    requestClassRoA(buttonStock, 'add');
    formStock.style.display = 'flex';
    formPedido.style.display = 'none';
    formDescuento.style.display = 'none';

    refreshHistory();
}
requestStyleRemove = (element)=>{
    if (element.style.display == 'flex') {
        element.style.display = 'none';
    } else {
        return false;
    }
}
requestClassRoA =(element, option)=>{
    if (option == 'add') {
        if (element.classList.contains('active') == false) {
            element.classList.add('active');
        }
    }
    else if (option == 'remove') {
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        }
    }
}
show = (call)=>{
    //agarra los elementos query
    let formStock = document.getElementById('stock');
    let formPedido = document.getElementById('pedido');
    let formDescuento = document.getElementById('descuento');

    let buttonStock = document.getElementById('stock_button');
    let buttonPedido = document.getElementById('pedido_button');
    let buttonDescuento = document.getElementById('descuento_button');

    switch (call) {
        case 'stock':
            requestClassRoA(buttonStock, 'add');
            requestClassRoA(buttonPedido, 'remove');
            requestClassRoA(buttonDescuento, 'remove');
            formStock.style.display = 'flex';
            requestStyleRemove(formPedido);
            requestStyleRemove(formDescuento);
        break;
        case 'pedido':
            requestClassRoA(buttonPedido, 'add');
            requestClassRoA(buttonStock, 'remove');
            requestClassRoA(buttonDescuento, 'remove');
            formPedido.style.display = 'flex';
            requestStyleRemove(formStock);
            requestStyleRemove(formDescuento);
        break;
        case 'descuento':
            requestClassRoA(buttonDescuento, 'add');
            requestClassRoA(buttonPedido, 'remove');
            requestClassRoA(buttonStock, 'remove');
            formDescuento.style.display = 'flex';
            requestStyleRemove(formStock);
            requestStyleRemove(formPedido);
        break;
    
        default:
            break;
    }
}
