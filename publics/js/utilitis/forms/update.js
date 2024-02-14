import { cargarOpciones } from "../options/options.js";
function formUpdate(id) {
    const container = document.getElementById('containerForm');
    let html = `
    <form action="" id="${id}" class="row w-100 py-4 d-flex justify-content-center align-items-center">
        <select id="select" name="nombre" class="col-6 mx-1">
            <option class="text-center" value="">--Seleccion--</option>
        </select>
        <input class="col-3 mx-1" type="number" min="0.1" step="any" value="1" placeholder="Cantidad" name="cantidad">
        <fieldset class="row pt-4 d-flex justify-content-center align-items-center">
            <input class="col-6 mx-1 btnAct btnForm" type="submit" id="agregar" value="Agregar">
            <input class="col-6 mx-1 btnAct btnForm" type="submit" id="descontar" value="Descontar">
        </fieldset>
    </form>
    `;
    container.innerHTML = html;
    cargarOpciones();
};
export {formUpdate};