let userData = JSON.parse(localStorage.getItem("userData"));
let askQuestionBtn = document.getElementById("ask");
let askQuestionDiv = document.getElementsByClassName("askingQuestion");
askQuestionBtn.addEventListener("click", function () {
  askQuestionDiv[0].classList.add("view");
  document.querySelector(".mainDiv").style.filter = "blur(8px)";
  document.querySelector("header").style.filter = "blur(8px)";
});

document.querySelector("#closeBtn").addEventListener("click", function () {
  askQuestionDiv[0].classList.remove("view");
  document.querySelector(".mainDiv").style.filter = null;
  document.querySelector("header").style.filter = null;
});
let Questions;

let questionName;
let questionDesc;
let userQuestions;
let profile = JSON.parse(localStorage.getItem("profile"));
askQuestionForm = document.getElementById("questionForm");
let currentUser;
userData.find((element) => {
  if (element["email"] == profile["email"]) {
    currentUser = element["email"];
  }
});

askQuestionForm.addEventListener("submit", function () {
  if (JSON.parse(localStorage.getItem("forum"))) {
    Questions = JSON.parse(localStorage.getItem("forum"));
  } else {
    Questions = [];
  }
  questionName = document.getElementById("questionName").value;
  questionDesc = document.getElementById("questionDesc").value;
  let id = Math.floor(Math.random() * 100);
  userQuestions = {
    id: id,
    "user": currentUser,
    "questionName": questionName,
    "questionDesc": questionDesc,
    answer: [],
  };
  Questions.push(userQuestions);
  localStorage.setItem("forum", JSON.stringify(Questions));
  // window.location.href="./forum.html"
});

let answer = JSON.parse(localStorage.getItem("forum"));

if (localStorage.getItem("forum")) {
  for (let i = 0; i < answer.length; i++) {
    var newQuestion = document.createElement("div");
    newQuestion.className = "questionContainer";

    // add the HTML content to the div
    newQuestion.innerHTML = `
<div class="firstSection">
<ul>
<li>0 votes</li>
<li id="answerCount">${answer[i]["answer"].length} answers</li>
<li>23 views</li>
</ul>
</div>
<div class="secondSection">
<p class="question">${answer[i]["questionName"]}</p>
<a href="#">Sql</a>
<a href="#">MySql</a>
<a href="#">Hacking</a>
</div>
`;

    // append the new div to the container
    var container = document.querySelector("main");
    container.appendChild(newQuestion);
    let name = document.querySelectorAll(".question");
    name[i].addEventListener("click", function () {
      window.location.href = "./answer.html?id=" + answer[i]["id"];
    });
  }
}