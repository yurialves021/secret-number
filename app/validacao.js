function  validaChute(chute){

    const numero = +chute

    if(verificaNumero(numero)){
        console.log('O valor é inválido')
    }

    if(verificaRange(numero)){
        console.log(`O valor é invalido, o número secreto está entre ${menorNumero} e ${maiorNumero}`)
    }
    
}


function verificaNumero(numero){

    return Number.isNaN(numero)
}

function verificaRange(numero){
    return numero > maiorNumero || numero < menorNumero
}

