const questionContainers = document.querySelectorAll(".question-container");

questionContainers.forEach((questionContainer) => {
  questionContainer.addEventListener("click", (e) => {
    const answerContainer = e.target.nextElementSibling;
    answerContainer.classList.toggle("toggle");
  }); 
})
