alert('Convertendo dolar');
let dolar = prompt('Informe quantos dolares');
let real = 4.80;
let valorConvertido = converteDolar(dolar, real);
alert(`Valor em reais convertido do dolar ${valorConvertido}`)

function converteDolar(dolar, real) {
    let conversor;
    conversor = dolar * real;
    return conversor;
}