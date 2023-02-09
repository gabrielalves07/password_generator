import './assets/css/style.css';

import GeraSenha from './modules/GeraSenha';

const output = document.querySelector('#output');
const quantidade = document.querySelector('.qtd_caracteres');
const maiusculas = document.querySelector('.maiusculas');
const minusculas = document.querySelector('.minusculas');
const numeros = document.querySelector('.numeros');
const simbolos = document.querySelector('.simbolos');

document.addEventListener('click', (e) => {
    // click no botão
    if(e.target.classList.contains('button')){
        if(quantidade.value <= 30 && quantidade.value > 2){
            let geraSenha = new GeraSenha(quantidade.value, 
                maiusculas.checked, 
                minusculas.checked,
                numeros.checked,
                simbolos.checked
            );
            output.value = geraSenha.gerar().slice(0, quantidade.value);
        }else{ output.value = '' }
    }
    // click no copy
    if(e.target.classList.contains('copy')){
        output.select();
        navigator.clipboard.writeText(output.value);
    }
    
});

