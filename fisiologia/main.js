"use strict"

const backup = {
    saveGridInputs() {
        const inputsCelulares = document.querySelectorAll("[data-total]");

        for (let i = 0; i < inputsCelulares.length; i++) {
            
            inputsCelulares[i].addEventListener("input", () => {
                localStorage.setItem(`${keyPrefix}-input${i}`, inputsCelulares[i].value);
            });
            inputsCelulares[i].value = localStorage.getItem(`${keyPrefix}-input${i}`);
        }
        
    },
    
    saveExtraInputs() {
        const inputsNaoCelulares = document.querySelectorAll(".input-nao-celular");
        inputsNaoCelulares.forEach( extraInput => {
            extraInput.addEventListener("input", () => localStorage.setItem(`${keyPrefix}-${extraInput.id}`, extraInput.value));
            extraInput.value = localStorage.getItem(`${keyPrefix}-${extraInput.id}`);
        });
    }
}

const totalizador = {
    filtrarEtotalizarCelulas(inputTarget) {
        const classNameDosOperandos = inputTarget.dataset.total;
        inputTarget.classList.add(`${classNameDosOperandos}`);

        // Total
        const operandos = document.querySelectorAll(`.${classNameDosOperandos}`);
        const celulaDeSaida = document.querySelector(`.${inputTarget.dataset.totaloutput}`);
        celulaDeSaida.value = this.somar(operandos);     
    },
    
    somar(celulasPorTotalizar) {
        let soma = 0;
        for(const c of celulasPorTotalizar) {
            soma += Number(c.value);
        }
        return soma;
    },
}

function escutarEventos() {
    const inputsCelulares = document.querySelectorAll("[data-total]");
    inputsCelulares.forEach( inputCelular => {
        inputCelular.addEventListener("input", () => totalizador.filtrarEtotalizarCelulas(inputCelular));
        inputCelular.value !== "" && totalizador.filtrarEtotalizarCelulas(inputCelular);
    });
}

window.addEventListener("load", () => {
    backup.saveGridInputs();
    backup.saveExtraInputs();
    escutarEventos();    
});




