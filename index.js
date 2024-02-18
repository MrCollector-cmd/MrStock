import { app } from "./src/middelwer/middels.js";
import { PORT } from "./src/configs/config.js";

function run(port) {
    app.listen(port,()=>{
        console.log(`Servidor corriendo en el Puerto: ${port}`);
    });
};

run(PORT);