function validaChute(chute) {

    const numero = +chute

    if (verificaNumero(numero)) {
        elementoChute.innerHTML += `<div> O valor é inválido </div>`
        return
    }

    if (verificaRange(numero)) {
        elementoChute.innerHTML += `<div> Valor inválido: Fale um número entre ${menorNumero} e ${maiorNumero} </div>`
        return
    }

    //Validação para o numero correto
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h1> Parabéns, você acertou !!</h1>
        <h3> O número secreto era ${numeroSecreto}</h3>
        `
    } else {
        dicasNumero(numero)
    }
}

//Verifica se o valor é um número
function verificaNumero(numero) {

    return Number.isNaN(numero)
}


//Verifica se o valor está dentor do Range definido
function verificaRange(numero) {
    return numero > maiorNumero || numero < menorNumero
}

function dicasNumero(numero) {
    if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i> </div>`

    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i> </div>`
    }
}


