
const menorNumero = 1
const maiorNumero = 1000

const numeroSecreto = gerarNumero()

function gerarNumero(){
    return parseInt(Math.random() * maiorNumero + 1)
}

const elementoMenor = document.getElementById('menor-valor')
elementoMenor.innerHTML = menorNumero

const elementoMaior = document.getElementById('maior-valor')
elementoMaior.innerHTML = maiorNumero

console.log(numeroSecreto)