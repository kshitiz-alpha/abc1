let para= document.getElementById('js');
var audio = new Audio('nonstop-love-mashup-2023-naresh.mp3');
let container=document.getElementById('container')
let main=document.getElementById("main")
js.addEventListener('click', function run(){
console.log("Mouse inside");
js.style.display='none';
container.style.display='block';
main.style.background = "url('./3.JPG')";
main.style.backgroundSize = "contain";





});

function toggleHide(){
    audio.play();
    
}

