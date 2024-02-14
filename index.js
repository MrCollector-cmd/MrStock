import { app } from "./src/middelwer/middels.js";

const PORT = process.env.PORT || 3000;

function run(port) {
    app.listen(port,()=>{
        console.log(`Servidor corriendo en el Puerto: ${port}`);
    });
};

run(PORT);