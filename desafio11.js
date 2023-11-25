alert('Calculando fatorial');
let numeroFatorial = prompt('Informe um numero a ser fatorado');
formulaFatoracao(numeroFatorial);

function formulaFatoracao(numero) {
    let formula = 0;
    let contador = numero;
    let soma = 0;
    while (contador > 0) {
        contador = contador -1;
        formula = numero * contador;
        console.log(formula);
        soma += formula;
        alert(`Numero fatorado é: ${soma}`);
    }    
}