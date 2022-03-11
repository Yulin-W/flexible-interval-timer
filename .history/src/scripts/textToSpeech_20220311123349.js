export async function speak(textToRead, synth) {
  if (synth.speaking) {
    console.error("speechSynthesis.speaking")
    return
  }
  if (textToRead !== "") {
    const utterThis = new SpeechSynthesisUtterance(textToRead)
    utterThis.onerror = function (event) {
      console.error("SpeechSynthesisUtterance.onerror")
    }
    synth.speak(utterThis)
  }
}