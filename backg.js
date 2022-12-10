const pagee = document.getElementById("page_B");

const p = ['A', 'B', "C", "D", "E"];

function bk(i){
    pagee.setAttribute("class", "pg Z")    
    pagee.classList.add(p[i]);
}   

const copy = document.getElementsByClassName("copy");

function copiarTexto(i) {
    copy[i].select();
    copy[i].setSelectionRange(0, 99999)
    document.execCommand("copy");
    copy[i].select()
}
