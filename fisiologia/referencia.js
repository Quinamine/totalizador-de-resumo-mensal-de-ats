"use strict"

const referencia = {
    retornarColuna(inputTarget) {
        const col = inputTarget.parentElement.dataset.col;
        const colOutput = document.querySelector(".reference-row__output--col-name");
        colOutput.value = col;
    },

    retornarVazio() {
        const outputs = document.querySelectorAll(".reference-row__output");
        for (const o of outputs) o.value = "";
    }
}

function events() {
    const gridInputs = document.querySelectorAll("[data-total]");
    gridInputs.forEach( gi => {
        gi.addEventListener("focus", () => {;
            referencia.retornarColuna(gi);
        });
    });

    gridInputs.forEach( gi => gi.addEventListener("focusout", referencia.retornarVazio));
}

window.onload = events;