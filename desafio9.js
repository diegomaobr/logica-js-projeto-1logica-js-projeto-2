let inicaFuncao = comparandoNumero(2, 5);

function comparandoNumero(numero1, numero2) {
    if (numero1 > numero2) {
        return console.log (`Numero 1 maior que numero 2, informado ${numero1}`);
    }
    if (numero2 > numero1) {
        return console.log (`Numero 2 maior que numero 1, informado ${numero2}`);
    } else{
        return console.log('Numeros iguais');
    }
}
console.log(inicaFuncao);