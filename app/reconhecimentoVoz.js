
//Chamando a API WebSpeech
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

//Capturando a Div onde será exibido o valor
const elementoChute = document.getElementById('chute')

//Instanciando a API
const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br' //Configurando para portugues BR
recognition.start() //Iniciando

//Adcionando um evento de resultado chamando a função onSpeak
recognition.addEventListener('result', onSpeak)

function onSpeak(e) {

    //Navegando pelo resultado para buscar o que foi dito
    const chute = e.results[0][0].transcript

    exibeChute(chute)

    validaChute(chute)
}

function exibeChute(chute) {

elementoChute.innerHTML = `
<div>Você disse</div>
<span class="box"> ${chute} </span>
`
}