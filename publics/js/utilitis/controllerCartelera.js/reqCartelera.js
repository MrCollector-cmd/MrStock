function reqCartelera(order) {
    if (order.operation == 'borrar') {
        try {
            fetch('/deleteOrder',{
                method:"POST",
                body:JSON.stringify(order),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => console.log("Success:", response));
        } catch (error) {
            throw error;
        }
    }else if (order.operation == 'agregar'){
        try {
            fetch('/countOrder',{
                method:"POST",
                body:JSON.stringify(order),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            .then((res) => res.json())
            .catch((error) => console.error("Error:", error))
            .then((response) => console.log("Success:", response));
        } catch (error) {
            throw error;
        }
    }else{
        console.log('No hay una operacion aparente...')
    }
};
export {reqCartelera}