var myScrollup = document.querySelector('button')

window.onscroll=function(){

window.scrollY >= 2500 ? myScrollup.style.display='block':  myScrollup.style.display='none' 
}
console.log(window.scrollY);

myScrollup.onclick = function up(){window.scrollTo(0,10);}


sld=document.getElementById("main");
port=document.querySelector(".portfolio")

sld.style.opacity="0";
port.style.visibility="hidden";

function slide(){

setTimeout(function(){

    sld.style.opacity="1";
    sld.style.transition="all 0.35s ease-out";
    port.style.visibility="visible";


    },400)

}

slide()

console.log(sld)


