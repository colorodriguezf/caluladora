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
total+=  event.currentTarget.value;
calculo.value=total;
console.log(total);
}

function resultadoFinal() {
    resultadoTotal.value= eval(total);
    total=resultadoTotal.value;
}
function reiniciar() {
    calculo.value ="";
    total="";
    resultadoTotal.value=0;

}
