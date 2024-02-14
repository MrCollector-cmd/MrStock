function eventsSelect() {
    let select = document.querySelector('select');
    select.addEventListener("change", function(){
        var selectedOptions = this.selectedOptions;
        console.log("Options selected: ");
        for (var i = 0; i < selectedOptions.length; i++) {
          console.log(selectedOptions[i].value);
        }
      });
};
export {eventsSelect};