function formInsert(id) {
    const container = document.getElementById('containerForm');
    let html = `
    <form action="" id="${id}" class="row w-100 py-4 d-flex justify-content-center align-items-center">
        <input class="col-4 mx-1" type="text" placeholder="Nombre" name="nombre">
        <input class="col-3 mx-1" type="number" step="any" min="0.1" value="1" placeholder="Cantidad" name="cantidad">
        <input class="col-2 mx-1" type="text" placeholder="Unidad" name="unidad">
        <fieldset class="row pt-4 d-flex justify-content-center align-items-center">
            <input class="col-2 mx-1 btnAct btnForm" type="submit" value="Insertar" id="insertar">
        </fieldset>
    </form>
    `;
    container.innerHTML = html;
};
export {formInsert};