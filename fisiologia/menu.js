"use strict";const menu={esvaziamento(){let e=document.querySelector("div.caixa-de-confirmacao"),o=document.querySelectorAll("div.body div.coluna input");return{mostrarCaixaDeConfirmacao(){let t=0;for(let r of o)""!=r.value&&t++;if(t>0)e.classList.add("on"),desfoqueDoFundo.on();else{let a=document.querySelector("div.caixa-de-alerta.ficha-vazia");a.classList.add("on"),desfoqueDoFundo.on()}},omitirCaixaDeConfirmacao(){e.classList.remove("on"),desfoqueDoFundo.off()},limparDados(){for(let e=0;e<o.length;e++)o[e].value="","undefined"!=typeof Storage&&localStorage.removeItem(`trmats-cel${e}`),inputValidation.adicionarOuRemoverFundoVermelho(o[e],"-");let t=document.querySelectorAll("ul.limpadores-de-dados-adicionais input");t.forEach(e=>{if(e.checked){let o=e.dataset.for,t=document.querySelector(`#${o}`);t.value="","undefined"!=typeof Storage&&localStorage.removeItem(`trmats-${o}`),"nota"===o&&t.classList.remove("bold")}}),desfoqueDoFundo.off()}}},imprimirFicha(){window.print();},abrirArtigoSobre(){document.querySelector("section#sobre").classList.add("on"),desfoqueDoFundo.on()},abrirArtigoCookies(){document.querySelector("section#cookies").classList.add("on"),desfoqueDoFundo.on(),window.innerWidth<1024&&document.querySelector("body").classList.add("overflow-hidden")},salvarComoPdf(){window.innerWidth<1024?this.imprimirFicha():(document.querySelector("section#conversao-pdf").classList.add("on"),desfoqueDoFundo.on())}},desfoqueDoFundo={on(){divDesfocante.classList.add("on")},off(){let e=document.querySelectorAll("div.caixa-de-confirmacao, div.caixa-de-alerta, div.hamburguer"),o=0;for(let t of e)t.classList.contains("on")&&o++;if(o>0)return!1;divDesfocante.classList.remove("on")}};let a, textArea,divDesfocante;function init(){a = document.querySelector(".esvaziar-ficha");textArea=document.querySelector("textarea#nota"),divDesfocante=document.querySelector("div.desfoque")}function eventListeners(){a.addEventListener("click",()=>menu.esvaziamento().mostrarCaixaDeConfirmacao());let i=document.querySelector("button.cancelar");i.addEventListener("click",()=>menu.esvaziamento().omitirCaixaDeConfirmacao());let s=document.querySelector("button.confirmar");s.addEventListener("click",()=>{menu.esvaziamento().limparDados(),menu.esvaziamento().omitirCaixaDeConfirmacao()});let n=document.querySelector("button.imprimir");n.addEventListener("click",()=>menu.imprimirFicha());let l=document.querySelector("button.abrir-artigo-sobre");l.addEventListener("click",()=>menu.abrirArtigoSobre()),"#sobre"===location.hash&&menu.abrirArtigoSobre();let d=document.querySelector("button.abrir-artigo-cookies");d.addEventListener("click",()=>menu.abrirArtigoCookies());let c=document.querySelectorAll("button.fechar-artigo");c.forEach(e=>{e.addEventListener("click",()=>{e.parentElement.classList.remove("on"),desfoqueDoFundo.off(),document.querySelector("body").classList.remove("overflow-hidden")})});let u=document.querySelector("section#cookies"),m=u.querySelector("h1"),f=u.querySelector("button.fechar-artigo");u.addEventListener("scroll",()=>{m.getBoundingClientRect().top<=0?(m.classList.add("sticky"),f.classList.add("with-h1-sticky")):(m.classList.remove("sticky"),f.classList.remove("with-h1-sticky"))}),document.querySelector("button.salvar-como-pdf").addEventListener("click",()=>menu.salvarComoPdf());let v={title:"Totalizador de Resumo Mensal de CCD",text:"O Totalizador de Resumo Mensal de CCD \xe9 um servi\xe7o online gratuito que auxilia na elabora\xe7\xe3o do resumo mensal de CCD, atrav\xe9s do c\xe1lculo autom\xe1tico dos totais a partir dos dados inseridos pelo usu\xe1rio (Profissional de Sa\xfade).",url:"https://quinamine.github.io/totalizador-de-resumo-mensal-de-ccd/index.html"},y=document.querySelector("button.partilhar");y.addEventListener("click",()=>{try{navigator.share(v).then(()=>{console.log("Endere\xe7o do totalizador partilhado com sucesso.")}).catch(e=>{console.log(`N\xe3o foi poss\xedvel partilhar devido ao erro: ${e}.`)})}catch(e){console.log("O seu navegador n\xe3o tem suporte ao m\xe9todo 'navigator.share()'.")}})}window.addEventListener("keyup",e=>{if("enter"===e.key.toLowerCase()){let o=document.querySelectorAll("div.caixa-de-alerta");o.forEach(e=>{e.matches(".on")&&(e.classList.remove("on"),srcInput.removeAttribute("readonly"),srcInput.select(),desfoqueDoFundo.off())})}}),window.addEventListener("load",()=>{init(),eventListeners()});