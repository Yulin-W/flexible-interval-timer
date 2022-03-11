export async function speak(textToRead, synth) {
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => populateVoiceList
  }
  if (synth.speaking) {
    console.error("speechSynthesis.speaking")
    return
  }
  if (textToRead !== "") {
    const utterThis = new SpeechSynthesisUtterance(textToRead)
    utterThis.onend = function (event) {
      onEndCallback("_play")
    }
    utterThis.onerror = function (event) {
      console.error("SpeechSynthesisUtterance.onerror")
    }
    // utterThis.voice = voices[0]
    utterThis.pitch = pitch
    utterThis.rate = rate
    synth.speak(utterThis)
  }
}