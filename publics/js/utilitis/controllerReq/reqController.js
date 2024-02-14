function reqController(dat) {
    switch (dat.operation) {
        case 'agregar':
            try {
                fetch('/count',{
                    method:"POST",
                    body:JSON.stringify(dat),
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
            break;
        case 'descontar':
            try {
                fetch('/discount',{
                    method:"POST",
                    body:JSON.stringify(dat),
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
        break;  
        case 'ordenar':
            try {
                fetch('/order',{
                    method:"POST",
                    body:JSON.stringify(dat),
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
        break;    
        case 'insertar':
            try {
                fetch('/insert',{
                    method:"POST",
                    body:JSON.stringify(dat),
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
        break;            
    }
};
export {reqController};