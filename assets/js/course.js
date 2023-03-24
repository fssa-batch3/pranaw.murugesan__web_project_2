// course page
const cards = [
    {
      imgSource: "../assets/img/bar-chart.png",
      title: "Things you should know",
      desc: "Basics things that need for a hacker",
      redirection:"stages"
    },
    {
      imgSource: "../assets/img/webhack.png",
      title: "Web Hacking",
      desc: "Things Which hackers do with web ",
      redirection:"webhack"
    },
    {
      imgSource: "../assets/img/mobileHack.png",
      title: "Hacking through mobile",
      desc: "Things Which hackers do with phone",
      redirection:"mobilehack"
    },
    {
      imgSource: "../assets/img/cross-site.png",
      title: "Cross-site script inclusion",
      desc: "Basics things that need for a hacker",
      redirection:""
    },
    {
      imgSource: "../assets/img/kalilinux.png",
      title: "Kali Linux Course",
      desc: "Basics things that need for a hacker",
      redirection:""
    },
    {
      imgSource: "../assets/img/humanhacking.png",
      title: "Human Hacking",
      desc: "Basics things that need for a hacker",
      redirection:""
    },
    {
      imgSource: "../assets/img/malverting.png",
      title: "Malverting",
      desc: "Basics things that need for a hacker",
      redirection:""
    },
    {
      imgSource: "../assets/img/networksecurity.png",
      title: "Network Security",
      desc: "Basics things that need for a hacker",
      redirection:""
    },
    {
      imgSource: "../assets/img/scripting.png",
      title: "Scripting",
      desc: "Basics things that need for a hacker",
      redirection:""
    },
  ]
for (let i = cards.length-1; i >= 0; i--) {



const container = document.createElement("div");
container.setAttribute("class", "container");

if(i>2){
  container.setAttribute("class", "container upcoming");
}
  document.querySelector("main").prepend(container);

  const img = document.createElement("img")
  img.setAttribute("src",cards[i]["imgSource"])
  document.querySelector("div.container").append(img)

  const courseTitle = document.createElement("h3")
  courseTitle.innerText = cards[i]["title"]
  document.querySelector("div.container").append(courseTitle)

  const desc = document.createElement("p")
  desc.innerText = cards[i]["desc"]
  document.querySelector("div.container").append(desc)

  const startLearn = document.createElement("button")
  startLearn.innerText = "Start Learning";
  startLearn.setAttribute("id",cards[i]["redirection"])
  startLearn.setAttribute("class","learnBtn")
  document.querySelector("div.container").append(startLearn)
}
document.querySelector("#stages").addEventListener("click",function(){
    window.location.href="../learning_pages/thingsShouldKnowIntro.html"
  })
  document.querySelector("#webhack").addEventListener("click",function(){
    window.location.href="../learning_pages/webhackingintro.html"
  })
  document.querySelector("#mobilehack").addEventListener("click",function(){
    window.location.href="../learning_pages/mobileHackingIntro.html"
  })