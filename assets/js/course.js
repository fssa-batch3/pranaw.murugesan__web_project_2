// course page
const cards = [
  {
    imgSource: "../assets/img/thingsYouShouldKnow.jpg",
    title: "Things you should know",
    desc: "Basic things that you should know about hacking before getting into this",
    redirection: "stages",
  },
  {
    imgSource: "../assets/img/web.jpg",
    title: "Web Hacking",
    desc: "Things which are all done by hackers by web",
    redirection: "webhack",
  },
  {
    imgSource: "../assets/img/mobileHacking.jpg",
    title: "Hacking through mobile",
    desc: "Things Which hackers do with phone",
    redirection: "mobilehack",
  },
  {
    imgSource: "../assets/img/scripting.jpg",
    title: "Scripting",
    desc: "a programming language that employs a high-level construct to interpret and execute one command at a time",
    redirection: "script",
  },
  {
    imgSource: "../assets/img/crossSite.jpg",
    title: "Cross-site script inclusion",
    desc: "XSS attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites",
    redirection: "",
  },
  {
    imgSource: "../assets/img/linux.jpg",
    title: "Kali Linux Course",
    desc: "Kali Linux is not about its tools, nor the operating system. Kali Linux is a platform.",
    redirection: "",
  },
  {
    imgSource: "../assets/img/humanHack.jpg",
    title: "Human Hacking",
    desc: "A global security expert draws on psychological insights to help you master the art of social engineering",
    redirection: "",
  },
  {
    imgSource: "../assets/img/malware.jpg",
    title: "Malverting",
    desc: "a relatively new cyberattack technique that injects malicious code within digital ads",
    redirection: "",
  },
  {
    imgSource: "../assets/img/network.jpg",
    title: "Network Security",
    desc: "Network security is any activity designed to protect the usability and integrity of your network and data.",
    redirection: "",
  },
  
];

for (let i = cards.length - 1; i >= 0; i--) {
  const container = document.createElement("div");
  container.setAttribute("class", "container");

  if (i > 3) {
    container.setAttribute("class", "container upcoming");
  }

  document.querySelector("main").prepend(container);

  const img = document.createElement("img");
  img.setAttribute("src", cards[i]["imgSource"]);
  document.querySelector("div.container").append(img);

  const courseTitle = document.createElement("h3");
  courseTitle.innerText = cards[i]["title"];
  document.querySelector("div.container").append(courseTitle);

  const desc = document.createElement("p");
  desc.innerText = cards[i]["desc"];
  document.querySelector("div.container").append(desc);

  const startLearn = document.createElement("button");
  startLearn.innerText = "Start Learning";
  startLearn.setAttribute("id", cards[i]["redirection"]);
  startLearn.setAttribute("class", "learnBtn");
  document.querySelector("div.container").append(startLearn);
}
document.querySelector("#stages").addEventListener("click", function () {
  window.location.href = "../learning_pages/thingsShouldKnowIntro.html";
});
document.querySelector("#webhack").addEventListener("click", function () {
  window.location.href = "../learning_pages/webhackingintro.html";
});
document.querySelector("#mobilehack").addEventListener("click", function () {
  window.location.href = "../learning_pages/mobileHackingIntro.html";
});
document.querySelector("#script").addEventListener("click", function () {
  window.location.href = "../learning_pages/scripting.html";
});


let search=document.getElementById("searchCourse");
        search.addEventListener("keyup",(e)=>{
            let word=e.target.value.toLowerCase();
            let course=document.querySelectorAll(".container");
            course.forEach(element => {
                let content=element.children[1].textContent.toLowerCase();
                if(content.includes(word)){
                    element.style.display="block";
                }
                else{
                    element.style.display="none";
                }
            });
        })