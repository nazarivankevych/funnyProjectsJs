const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    question.classList.toggle("answer-text");
    btn.classList.toggle("minus-icon");
    btn.classList.toggle("plus-icon");

    const answer = question.querySelector(".answer-text");
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});