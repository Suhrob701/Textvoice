let speech = new SpeechSynthesisUtterance();
let voices = []

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]
        voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))) // i ni urniga lyuboy narsa ham yozsa buladi
}

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// ovoz chiqarish jarayoni
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});



