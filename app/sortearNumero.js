//Definindo os limites do numero secreto
const menorNumero = 1  
const maiorNumero = 1000


const numeroSecreto = gerarNumero()


//Funçao para criar um numero secreto, utilizando o +1 para incluir o maior numero também no sorteio
function gerarNumero(){
    return parseInt(Math.random() * maiorNumero + 1)
}

//Adicionando a informação na tela do HTML
const elementoMenor = document.getElementById('menor-valor')
elementoMenor.innerHTML = menorNumero

const elementoMaior = document.getElementById('maior-valor')
elementoMaior.innerHTML = maiorNumero
