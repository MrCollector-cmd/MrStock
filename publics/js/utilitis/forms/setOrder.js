import { cargarOpciones } from "../options/options.js";
function formSetOrder(id) {
    const container = document.getElementById('containerForm');
    let html = `
    <form action="" id="${id}" class="row w-100 py-4 d-flex justify-content-center align-items-center">
        <select id="select" name="nombre" class="col-6 mx-1">
            <option class="text-center" disable value="">--Seleccion--</option>
        </select>
        <input class="col-3 mx-1" type="number" step="any" min="0.1" value="1" placeholder="Cantidad" name="cantidad">
        <fieldset class="row pt-4 d-flex justify-content-center align-items-center">
            <input class="col-6 mx-1 btnAct btnForm" type="submit" id="ordenar" value="Ordenar">
        </fieldset>
    </form>
    `;
    container.innerHTML = html;
    cargarOpciones();
};
export {formSetOrder};