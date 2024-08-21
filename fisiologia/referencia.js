"use strict"
const referencia = {
    retornarColuna(inputTarget) {
        const col = inputTarget.parentElement.dataset.col;
        const colOutput = document.querySelector(".reference__output--col-name");
        colOutput.value = col;
    },
    retornarVazio() {
        const outputs = document.querySelectorAll(".reference__output");
        for (const o of outputs) o.value = "";
    }
}
function events() {
    const inputsCelulares = document.querySelectorAll("[data-total]");
    inputsCelulares.forEach( inputCelular => {
        inputCelular.addEventListener("focus", () => {;
            referencia.retornarColuna(inputCelular);
        });
    });
    inputsCelulares.forEach( inputCelular => inputCelular.addEventListener("focusout", referencia.retornarVazio));
}
window.onload = events;