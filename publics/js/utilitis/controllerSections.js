function controllerSec(context) {
    const options = document.querySelectorAll('.nav-item');
    options.forEach((elem,i)=>{
        elem.addEventListener('click',(e)=>{
            const optionSelected = e.currentTarget;
            if(!optionSelected.classList.contains('activeAnchor')){
                options.forEach(elem=>{
                    elem.classList.remove('activeAnchor');
                });
                optionSelected.classList.add('activeAnchor');
                context.actPosition = i;
                context.useStyle = true;
            };
        });
    });    

};
export {controllerSec};