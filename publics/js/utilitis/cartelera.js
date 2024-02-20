async function refreshCartelera(context) {
    try {
        const dat = await fetch('/getOrders');
        console.log('asdad')
        const res = await dat.json();
        context.pedidos = res; 
    } catch (error) {
        throw error;
    };
};
export {refreshCartelera};