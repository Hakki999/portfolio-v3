const pages  = ['page_A', 'page_B', 'page_C'];
const page = document.getElementsByClassName("pg");
var x = false;

function busk(i){
    let l = document.querySelectorAll(".left_"+pages[i]);
    let r = document.querySelectorAll(".right_"+pages[i]);

    return [l, r];
}

function next(i){
    if(x == false){
        x = true;
        setTimeout(()=>{
            page[i].style= "display: none;";
             x = false;
        }, 2100)
    
        page[i+1].style= "z-index: 3; animation-name: openPage; animation-duration: 2s;";

        busk(i)[0].forEach(e => {
            e.classList.remove("onL")
            e.classList.add("offL")
        })

        busk(i+1)[0].forEach(e => {
            e.classList.remove("offL")
            e.classList.add("onL")
        })

        busk(i)[1].forEach(e => {
            e.classList.remove("onR")
            e.classList.add("offR")
        })

        busk(i+1)[1].forEach(e => {
            e.classList.remove("offR")
            e.classList.add("onR")
        })
    }
    
}

function back(i){
    if(x == false){
        x = true;
        setTimeout(()=>{
            x= false;
            page[i].style= "display: none;";
        }, 2100)
    
        page[i].style= "z-index: 1;"
        page[i-1].style= "z-index: 3; animation-name: openPage; animation-duration: 2s;";

        busk(i)[0].forEach(e => {
            e.classList.remove("onL")
            e.classList.add("offL")
        })

        busk(i-1)[0].forEach(e => {
            e.classList.remove("offL")
            e.classList.add("onL")
        })

        busk(i)[1].forEach(e => {
            e.classList.remove("onR")
            e.classList.add("offR")
        })

        busk(i-1)[1].forEach(e => {
            e.classList.remove("offR")
            e.classList.add("onR")
        })

    }
    
}