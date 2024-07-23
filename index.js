const questionContainers = document.querySelectorAll(".question-container");
const answerContainers = document.querySelectorAll(".answer-container");

questionContainers.forEach((questionContainer) => {
  questionContainer.addEventListener("click", (e) => {
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
