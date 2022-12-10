const pagee = document.getElementById("page_B");

const p = ['A', 'B', "C", "D", "E"];

function bk(i){
    pagee.setAttribute("class", "pg Z")    
    pagee.classList.add(p[i]);
}   