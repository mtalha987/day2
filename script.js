const progrss = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");


let active = 1;
prev.addEventListener("click", () => {
    active--;
    if (active<1){
        active= 1;
    }
    update()
})

next.addEventListener("click", () => {
    active++;
    if (active>circles.length){
        active= circles.length;
    }
    update()
})

function update(){
    circles.forEach( (circle,idx)=>{
        if (idx <active){
            circle.classList.add("active");
        }
        else{
            circle.classList.remove("active");
        }
    })
    const actives= document.querySelectorAll(".active");
    progrss.style.width = (actives.length -1)/(circles.length -1) * 100 + "%";

    if(active===1){
        prev.disabled=true;
        console.log("active");
    }else if(active===4){
        next.disabled=true;
        console.log("active");
    }
    else{
        next.disabled=false;
        prev.disabled=false;
        console.log("active");
    }
}