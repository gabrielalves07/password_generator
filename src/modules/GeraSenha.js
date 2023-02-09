import { geraChar, geraSimbolos } from "./geraCaracteres";

export default class GeraSenha{
    constructor(qtd, maiusc, minus, num, simb){
        this.quantidade = qtd;
        this.maiusculas = maiusc;
        this.minusculas = minus;
        this.numeros = num;
        this.simbolos = simb;
    }

    gerar(){
        const array = [];
        for(let i = 0; i < this.quantidade; i++){
            this.maiusculas && array.push(geraChar(65, 90));
            this.minusculas && array.push(geraChar(97, 122)); 
            this.numeros && array.push(geraChar(48, 57));
            this.simbolos && array.push(geraSimbolos());
        }
        return array.join('');
    }
}