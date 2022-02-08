"use strict"

document.addEventListener("DOMContentLoaded",calcular);
let resultado= document.getElementById("resultado");
let total= [];

function calcular() {
let valor = document.querySelectorAll(".valor");
for (let v of valor) {
    v.addEventListener("click", obtenerValor);
}
}

function obtenerValor() {
total+=  event.currentTarget.value;
console.log(total);
}