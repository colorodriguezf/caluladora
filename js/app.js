"use strict"

document.addEventListener("DOMContentLoaded",calcular);
document.getElementById("igual").addEventListener("click", resultadoFinal);
document.getElementById("reiniciar").addEventListener("click", reiniciar);
let calculo= document.getElementById("calculo");
let total= [];
let resultadoTotal =document.getElementById("resultado");

function calcular() {
let valor = document.querySelectorAll(".valor");

for (let v of valor) {
    v.addEventListener("click", obtenerValor);
}


}
function obtenerValor() {
// const sonido = new Audio();
// sonido.src="sonido/ES_Bubble Blip 2 - SFX Producer.mp3";
// sonido.play();

total+=  event.currentTarget.value;
calculo.value=total;
console.log(total);
}

function resultadoFinal() {
    // const audioResultado = new Audio();
    // audioResultado.src="sonido/ES_Squeak Drip - SFX Producer.mp3";
    // audioResultado.play();
    resultadoTotal.value= eval(total);
    total=resultadoTotal.value;
}
function reiniciar() {
    // const audioResultado = new Audio();
    // audioResultado.src="sonido/ES_Squeak Drip - SFX Producer.mp3";
    // audioResultado.play();
    
    calculo.value ="";
    total="";
    resultadoTotal.value=0;

}
