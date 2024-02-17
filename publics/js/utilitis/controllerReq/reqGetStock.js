async function getStock() {
    try {
        const response = await fetch('/getStock');
        const data = await response.json();
        const selectElement = document.querySelector('.table');
        const opcionesHTML = data.map(opcion => `<tr><td>${opcion.nombre}<td><td>${opcion.cantidad.toFixed(2)}<td><td>${opcion.unidad}<td><tr>`).join('');
        selectElement.innerHTML += opcionesHTML;
    } catch (error) {
        console.error('Error al cargar opciones:', error);
    }
};
export {getStock}