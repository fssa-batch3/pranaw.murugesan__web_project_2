JSON.parse(localStorage.getItem("course_list")) 
JSON.parse(localStorage.getItem("profile"));
// course page
const cards = [
  {
    imgSource: "../assets/img/thingsYouShouldKnow.jpg",
    title: "Things you should know",
    desc: "Basic things that you should know about hacking before getting into this",
    redirection: "stages",
    dataset: "thingsYouShouldKnow"
  },
  // {
  //   imgSource: "../assets/img/web.jpg",
  //   title: "Web Hacking",
  //   desc: "Things which are all done by hackers by web",
  //   redirection: "webhack",
  //   dataset:"web"
  // },
  {
    imgSource: "../assets/img/mobileHacking.jpg",
    title: "Hacking through mobile",
    desc: "You will learn all about ethical mobile hacking on Android in this course! Course is strictly for ethical hacking and educational purposes!",
    redirection: "mobilehack",
    dataset:"mobilehack"
  },
  {
    imgSource: "../assets/img/scripting.jpg",
    title: "Scripting",
    desc: "A programming language that employs a high-level construct to interpret and execute one command at a time",
    redirection: "script",
    dataset:"script"
  },
  {
    imgSource: "../assets/img/humanHack.jpg",
    title: "Human Hacking",
    desc: "A global security expert draws on psychological insights to help you master the art of social engineering",
    redirection: "humanhack",
    dataset:"humanhack"
  },
  {
    imgSource: "../assets/img/crossSite.jpg",
    title: "Cross-site script inclusion",
    desc: "XSS attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites",
    redirection: "stages",
    dataset:"xxs"
  },
  {
    imgSource: "../assets/img/linux.jpg",
    title: "Kali Linux Course",
    desc: "Kali Linux is not about its tools, nor the operating system. Kali Linux is a platform.",
    redirection: "stages",
    dataset:"kali"
  },
  
  {
    imgSource: "../assets/img/malware.jpg",
    title: "Malvertising",
    desc: "a relatively new cyberattack technique that injects malicious code within digital ads",
    redirection: "",
    dataset:"malware"
  },
  {
    imgSource: "../assets/img/network.jpg",
    title: "Network Security",
    desc: "Network security is any activity designed to protect the usability and integrity of your network and data.",
    redirection: "",
    dataset:"network"
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
  startLearn.setAttribute("data-id", cards[i]["dataset"]);
  document.querySelector("div.container").append(startLearn);
}
let stage=document.querySelector("#stages");
stage.addEventListener("click", function () {
  
  // arr.find((el) => {
  //   if (el["enrolled_course"] == stage.dataset.id && el["user_name"] == user.email && el["is_enrolled"] == true) {
  //     window.location.href = "../learning_pages/stagesOfHacking.html";
  // } 
  // else{
    window.location.href = "../learning_pages/thingsShouldKnowIntro.html";
  // }
  // }) 
 
});
// let webhack=document.querySelector("#webhack")
// webhack.addEventListener("click", function () {
//   // window.location.href = "../learning_pages/webhackingintro.html";
//   arr.find((el) => {
//     if (el["enrolled_course"] == webhack.dataset.id && el["user_name"] == user.email && el["is_enrolled"] == true) {
//       window.location.href = "../learning_pages/webhacking.html";
//   } 
//   else{
//     window.location.href = "../learning_pages/webhackingintro.html";
//   }
//   });
// });
// let mobilehack=document.querySelector("#mobilehack")
// mobilehack.addEventListener("click", function () {
//   arr.find((el) => {
//     if (el["enrolled_course"] == mobilehack.dataset.id && el["user_name"] == user.email && el["is_enrolled"] == true) {
//       window.location.href = "../learning_pages/mobileHackingIntro.html";
//   } 
//   else{
//     window.location.href = "../learning_pages/thingsShouldKnowIntro.html";
//   }
//   });
//   // window.location.href = "../learning_pages/mobileHackingIntro.html";
// });
// let script=document.querySelector("#script")
// script.addEventListener("click", function () {
//   arr.find((el) => {
//     if (el["enrolled_course"] == script.dataset.id && el["user_name"] == user.email && el["is_enrolled"] == true) {
//       window.location.href = "../learning_pages/scripting.html";
//   } 
//   else{
//     window.location.href = "../learning_pages/thingsShouldKnowIntro.html";
//   }
//   });
//   // window.location.href = "../learning_pages/scripting.html";
// });


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

let course_list = JSON.parse(localStorage.getItem("course_list"))

let learnBtn = document.querySelectorAll(".learnBtn")
// console.log(learnBtn[1]);

learnBtn[0].addEventListener("click",function(e){
  if(localStorage.getItem("course_list")){
    console.log(e.target.dataset.id);
    course_list.find(el=>{
      if(el["enrolled_course"]==e.target.dataset.id){
        window.location.href="../learning_pages/stagesOfHacking.html"
      }else{
        window.location.href="../learning_pages/thingsShouldKnowIntro.html"
      }
    })
  }
  
})
// learnBtn[1].addEventListener("click",function(e){
//   if(localStorage.getItem("course_list")){
//     console.log(e.target.dataset.id);
//   course_list.find(el=>{
//     if(el["enrolled_course"]==e.target.dataset.id){
//       window.location.href="../learning_pages/webhacking.html"
//     }else{
//       window.location.href="../learning_pages/webhackingintro.html"
//     }
//   })
//   }else{
//     window.location.href="../learning_pages/webhackingintro.html"
//   }
// })
learnBtn[1].addEventListener("click",function(e){
  if(localStorage.getItem("course_list")){
    console.log(e.target.dataset.id);
  course_list.find(el=>{
    if(el["enrolled_course"]==e.target.dataset.id){
      window.location.href="../learning_pages/mobileHacking.html"
    }else{
      window.location.href="../learning_pages/mobileHackingIntro.html"
    }
  })
  }else{
    window.location.href="../learning_pages/mobileHackingIntro.html"
  }
})
learnBtn[2].addEventListener("click",function(e){
  if(localStorage.getItem("course_list")){
    console.log(e.target.dataset.id);
    course_list.find(el=>{
      if(el["enrolled_course"]==e.target.dataset.id){
        window.location.href="../learning_pages/scripting.html"
      }else{
        window.location.href="../learning_pages/scriptingIntro.html"
      }
    })
  }else{
    window.location.href="../learning_pages/scriptingIntro.html"
  }
  
})
learnBtn[3].addEventListener("click",function(e){
  if(localStorage.getItem("course_list")){
    console.log(e.target.dataset.id);
    course_list.find(el=>{
      if(el["enrolled_course"]==e.target.dataset.id){
        window.location.href="../learning_pages/humanHacking.html"
      }else{
        window.location.href="../learning_pages/humanHacking.html"
      }
    })
  }else{
    window.location.href="../learning_pages/scriptingIntro.html"
  }
  
})