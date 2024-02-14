function eventsButtons() {
    let buttons = document.querySelectorAll('.btnForm');
    buttons.forEach(elem=>{
        elem.addEventListener('click',(e)=>{
            buttons.forEach(btn=>{
                btn.classList.remove('optSelected');
            })
            e.currentTarget.classList.add('optSelected');
        });
    });
};
export {eventsButtons};