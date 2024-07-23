const questionContainers = document.querySelectorAll(".question-container");
const answerContainers = document.querySelectorAll(".answer-container");
const questionsIcon = document.querySelectorAll(".question-container img");
const plusIconPath = "./assets/images/icon-plus.svg";
const minusIconPath = "./assets/images/icon-minus.svg";

questionContainers.forEach((questionContainer) => {
  questionContainer.addEventListener("click", (e) => {
    questionsIcon.forEach((icon) => {
      icon.src = plusIconPath;
    })
    e.target.childNodes[1].src = minusIconPath;
    // Reset all of them to close
    answerContainers.forEach((answerContainer) => {
      answerContainer.classList.add("close");
      answerContainer.classList.remove("open");
    })
    const answerContainer = e.target.nextElementSibling;
    answerContainer.classList.add("open");
    answerContainer.classList.remove("close");
  }); 
})
