let url = window.location.search;
let search = new URLSearchParams(url);
let id = search.get("id");
let forum_arr = JSON.parse(localStorage.getItem("forum"));
let head = document.getElementById("head");
let desc = document.getElementById("desc");
let answersStorage;
let userData = JSON.parse(localStorage.getItem("userData"));
let profile = JSON.parse(localStorage.getItem("profile"));
let yourAnswer = document.getElementById("yourAnswer");
let answerUserTyped;
let profileName;
let forum = JSON.parse(localStorage.getItem("forum"));
let answerId = Math.floor(Math.random() * 100);

let forum_obj = forum_arr.find(function (obj) {
  if (id === obj["id"] + "") {
    return true;
  } else {
    return false;
  }
});
head.innerText = forum_obj["questionName"];
desc.innerText = forum_obj["questionDesc"];



userData.find((e) => {
  if (e["email"] == profile["email"]) {
    profileName = e["firstname"];
  }
});

yourAnswer.addEventListener("submit", function (e) {
  e.preventDefault();
  if (localStorage.getItem("forum")) {
    forum = JSON.parse(localStorage.getItem("forum"));
  }
  // else {
  //     answer_arr = []
  // }
  answerUserTyped = document.getElementById("answerText").value;
  answersStorage = {
    answeredBy: profileName,
    answer: answerUserTyped,
  };
  for (let i = 0; i < forum.length; i++) {
    forum[i]["answer"].push(answersStorage);
    localStorage.setItem("forum", JSON.stringify(forum));
    location.reload();
    
  }
  // forum.push(answersStorage)
});
forum.find((e) => {
  // finding user with id
  if (e["id"] == id) {
    // finding answer
    e["answer"].find((el) => {
    
      // Appending div
      const answeredSection = document.createElement("div");
      answeredSection.classList.add("answeredSection");

      const strong = document.createElement("h5");
      strong.textContent = `Answered by ${el["answeredBy"]}`;
      answeredSection.appendChild(strong);

      const voteSection = document.createElement("div");
      voteSection.setAttribute("class", "voteSection");
      answeredSection.appendChild(voteSection);

      const p = document.createElement("p");
      p.textContent = el["answer"];
      voteSection.appendChild(p);

      const like = document.createElement("button");
      like.setAttribute("id", "likeBtn");
      voteSection.appendChild(like);

      const likeIcon = document.createElement("i");
      likeIcon.setAttribute("class", "fa-regular fa-thumbs-up");
      likeIcon.setAttribute("id", "likeIcon");
      like.appendChild(likeIcon);
      document.querySelector("#viewed").innerHTML=`views ${e["views"]}`
      document.querySelector(".answeredSection").appendChild(answeredSection);
    });
  }
});

const likeBtn = document.querySelectorAll("#likeBtn");
const likeIcon = document.querySelectorAll("#likeIcon");
let likeCount = 0;
likeIcon.forEach((e) => {
  e.addEventListener("click", function (el) {
    if (el.target.style.color == "blue") {
      e.classList.remove("fa-solid");
      e.style.color = null;
      likeCount--;
    } else {
      e.classList.add("fa-solid");
      e.style.color = "blue";
      likeCount++;
    }
    console.log(likeCount);
  });
});

