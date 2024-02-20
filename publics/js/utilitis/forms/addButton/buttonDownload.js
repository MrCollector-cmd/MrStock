
function btnDownload(bool) {
    if(bool){
        let html = `
        <a class="btnDownload text-bolder" href="/downloadStock">Descargar</a>
        `;
        const container = document.getElementById('containerForm').parentElement;
        container.innerHTML += html;
    }else{
        const container = document.getElementById('containerForm').parentElement;
        if (container.lastElementChild.classList.contains('btnDownload')) {
            container.lastElementChild.remove();
        }
    }
};
export {btnDownload};