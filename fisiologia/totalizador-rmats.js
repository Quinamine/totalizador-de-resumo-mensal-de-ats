const armazenamento={
	salvarFicha(){
		for(let t=0;t<celulas_de_entrada.length;t++)celulas_de_entrada[t].addEventListener("input",()=>{localStorage.setItem(`trmats-cel${t}`,`${celulas_de_entrada[t].value}`)}),celulas_de_entrada[t].value=localStorage.getItem(`trmats-cel${t}`)
	},
	
	salvarDadosAdicionais() {
		/*const dadosAdicionais = document.querySelectorAll("div.container > header input, footer.rodape-da-ficha input, input[type=date], textArea"); */
		const dadosAdicionais = document.querySelectorAll("div.container > header input");
		for(let i=0;i<dadosAdicionais.length;i++)if(dadosAdicionais[i].addEventListener("input",()=>{if(localStorage.setItem(`trmats-${dadosAdicionais[i].id}`,`${dadosAdicionais[i].value}`),dadosAdicionais[i].matches("#nota")){let e=dadosAdicionais[i];e.value.length>0?e.classList.add("bold"):e.classList.remove("bold")}}),dadosAdicionais[i].value=localStorage.getItem(`trmats-${dadosAdicionais[i].id}`),dadosAdicionais[i].matches("#nota")){let e=dadosAdicionais[i];e.value.length>0?e.classList.add("bold"):e.classList.remove("bold")
		}
	}
}


const totalizador={
	filtrarCelulas(t){
		if(t.dataset.total){
			t.classList.add(`${t.dataset.total}`);
			let a=document.querySelectorAll(`.${t.dataset.total}`),
			e=document.querySelector(`.${t.dataset.totaloutput}`);
			this.totalizarCelulas(a,e)}if(t.dataset.total);
	},
	

	totalizarCelulas(t,a){
		let e=0;
		for(let l of t)
			e+=Number(l.value);
		a.value=e
	}
}


window.addEventListener("load",()=>{armazenamento.salvarFicha(),armazenamento.salvarDadosAdicionais(),celulas_de_entrada.forEach(t=>{t.addEventListener("input",()=>totalizador.filtrarCelulas(t)),""!==t.value&&totalizador.filtrarCelulas(t)})});