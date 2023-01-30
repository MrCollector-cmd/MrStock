requestAjax = ()=>{
    let http = new XMLHttpRequest();
    const url = '';

    http.onreadystatechange = ()=>{
        if(this.readyState == 4 && this.status == 200)
        console.log(this.responseText);
    }
    http.open("GET", url);
    http.send();
}