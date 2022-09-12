window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const elementoChute = document.getElementById('chute')

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
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