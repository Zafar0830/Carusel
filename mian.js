const imgs=document.getElementById("imgs");
const leftBtn=document.getElementById("left");
const RightBtn=document.getElementById("right");

const img=document.querySelectorAll("#imgs img");


let idx=0;
function changeImage() {
    if (idx>img.length-1) {
        idx=0;
    }else if(idx<0){
        idx=img.length-1;
    }
    imgs.style.transform=`translateX(${-idx*500}px)`;
}

RightBtn.addEventListener('click',function change() {
    idx++;
    restInterval()
    changeImage();
})
leftBtn.addEventListener('click',function change() {
    idx--;
    restInterval()
    changeImage();
})
let Interva=setInterval(run,3000);
function run() {
    idx++;
    changeImage();
}

function restInterval() {
    clearInterval(Interva);
    Interva=setInterval(run,5000);
}