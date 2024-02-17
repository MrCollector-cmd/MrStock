import { getStock } from "../controllerReq/reqGetStock.js";
function viewInf(id) {
    const container = document.getElementById('containerForm');
    let html = `
    <table id="${id}" class="table table-striped table-dark  h-100 position-absolute top-0">
        <tr>
            <th scope='col'>Nombre<th>
            <th scope='col'>Cantidad<th>
            <th scope='col'>Inidad<th>
        </tr>
    </table>
    `;
    container.innerHTML = html;
    getStock();
};
export {viewInf};