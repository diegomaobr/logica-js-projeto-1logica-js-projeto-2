alert('Calculando IMC');
let altura = 1.70;
let peso = 105;
calculaIMC(altura, peso);

function calculaIMC(altura, peso) {
    let imc = peso / (altura * altura);
    if (imc < 16) {
        return alert(`Baixo peso muito grave IMC ${imc}`)
    }
    if (imc >= 16 && imc <= 16.99) {
        return alert(`Baixo peso grave imc ${imc}`)
    }
    if (imc >= 17 && imc <= 18.49) {
        return alert(`Baixo peso imc ${imc}`)
    }
    if (imc >= 18.50 && imc <= 24.99) {
        return alert(`Peso normal`);
    }
    if (imc >= 25 && imc <= 29.99) {
        return alert(`Sobrepeso seu imc ${imc}`)
    }
    if (imc >= 30 && imc <= 34.99) {
        return alert(`Obesidade grau I imc ${imc}`)
    }
    if (imc >= 35 && imc <= 39.99) {
        return alert(`Obesidade grau II imc ${imc}`);
    } else {
        return alert(`Obesidade morbida imc ${imc}`);
    }
}