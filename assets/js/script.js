// index page
const storage = JSON.parse(localStorage.getItem("userData"));

document.querySelector(".profile.btn.btn-info").addEventListener("click", function () {
  //   if(storage){
  //     window.location.href="./login/signin.html"
  //   }else{
  //     window.location.href="./profile/profile.html"
  // }
  window.location.href = "./login/signin.html";
});

//   document.querySelector("#courseProfile").addEventListener('click',function(){
//     window.location.href = "./login/signin.html"
//   })
