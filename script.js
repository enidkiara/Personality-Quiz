/*Add your JavaScript here*/
var beachScore = 0;
var natureScore = 0;

var questionCount = 0;

var result = document.getElementById("result");

var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", beach);
q1a2.addEventListener("click", nature);
q2a1.addEventListener("click", beach);
q2a2.addEventListener("click", nature);
q3a1.addEventListener("click", beach);
q3a2.addEventListener("click", nature);

restart.addEventListener("click", restartQuiz);

function beach() {
  beachScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " beachScore = " + beachScore);

  if (questionCount == 3) {
    console.log("The quiz is done.");
    updateResult();
  }
}
function nature() {
  natureScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " natureScore = " + natureScore);

  if (questionCount == 3) {
    console.log("The quiz is done.");
    updateResult();
  }
}
function updateResult () {
  if (beachScore >= 2) {
    result.innerHTML = "You are a Beach Lover";
    console.log("You are a Beach Lover");
  } else if (natureScore >= 2) {
    result.innerHTML = "You are a Nature Explorer";
    console.log("You are a Nature Explorer");
  }
}
function restartQuiz() {
  result.innerHTML = "Your result is...";
  console.log("Your result is...");
  beachScore   = 0;
  natureScore  = 0;
  questionCount = 0;
}