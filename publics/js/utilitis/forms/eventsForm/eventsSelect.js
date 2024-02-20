function eventsSelect() {
    let select = document.querySelector('select');
    select.addEventListener("change", function(){
        var selectedOptions = this.selectedOptions;
        for (var i = 0; i < selectedOptions.length; i++) {
          console.log(selectedOptions[i].value);
        }
      });
};
export {eventsSelect};