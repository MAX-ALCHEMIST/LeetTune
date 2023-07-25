const successAudioElement = new Audio(chrome.runtime.getURL("assets/accepted.mp3"));
const wrongAnswerAudioElement = new Audio(
  chrome.runtime.getURL("assets/wrong.mp3")
);

const playAudio = (audioElement) => {
  audioElement
    .play()
    .then(() => {
      console.log("Audio played successfully.");
    })
    .catch((error) => {
      console.error("Error playing audio:", error);
    });
};

let wrongAnswerPlayed = false;
const checkSuccessAndPlayAudio = () => {
  const successTag = document.querySelector(".success__3Ai7");
  if (successTag && successTag.innerText.trim() === "Success") {
    playAudio(successAudioElement);
    console.log("Correct answer!");
    return true;
  } else {
    const wrongAns = document.getElementsByClassName("error__2Ft1");
    if (wrongAns && wrongAns.length > 0 && !wrongAnswerPlayed) {
      playAudio(wrongAnswerAudioElement);
      console.log("Wrong answer!");
      wrongAnswerPlayed = true;
    }
    return false;
  }
};

window.onload = () => {
  const successPlayed = checkSuccessAndPlayAudio();

  if (successPlayed || wrongAnswerPlayed) {
    setTimeout(() => {
      window.location.reload();
    }, 10000);
  } else {
    setInterval(() => {
      const successPlayed = checkSuccessAndPlayAudio();
      if (successPlayed || wrongAnswerPlayed) {
        clearInterval(this);
        setTimeout(() => {
          window.location.reload();
        }, 10000);
      }
    }, 2000);
  }
};
