const simb = ['*', '/', '@', '#', '$', '!', '?', '^', '~'];

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function geraChar(min, max){
    return String.fromCharCode(rand(min, max + 1)); 
}

export function geraSimbolos(){
    return simb[rand(0, 9)];
}
