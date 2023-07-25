console.log("start LeetTune");

window.onload = () => {
  setInterval(() => {
    const successTag = document.getElementsByClassName("success__3Ai7");
    const wrongAns = document.getElementsByClassName("error__2Ft1");

    const checkElem = (elem) => {
      return elem && elem.length > 0;
    };
    let success = false;
    if (checkElem(successTag) && successTag[0].innerText.trim() === "Success") {
      console.log(successTag[0]);
      console.log("Hello");
      success = true;
    } else {
      console.log("Whatever it is");
    }
  }, 5000);
};
