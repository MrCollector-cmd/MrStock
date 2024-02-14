async function cargarOpciones() {
        try {
            const response = await fetch('/getStock');
            const data = await response.json();
            const opcionesHTML = data.map(opcion => `<option class="text-center" value="${opcion.nombre}">${opcion.nombre}</option>`).join('');
            const selectElement = document.querySelector('select');
            selectElement.innerHTML += opcionesHTML;
        } catch (error) {
            console.error('Error al cargar opciones:', error);
        }
    
}
export {cargarOpciones};