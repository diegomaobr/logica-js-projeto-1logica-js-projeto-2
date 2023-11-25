let listanNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial() {
    exibirTextoTela('h1', 'Jogo do numero secreto');
    exibirTextoTela('p', 'Escolha um numero entre 1 e 100');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto) {
            exibirTextoTela('p', 'O numero secreto é menor');
        } else{
            exibirTextoTela('p', 'O numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listanNumerosSorteados.length;
    if (quantidadeElementosLista == numeroLimite) {
        listanNumerosSorteados = [];
    }
    if (listanNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listanNumerosSorteados.push(numeroEscolhido);
        console.log(listanNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}