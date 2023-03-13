// index page
const storage = JSON.parse(localStorage.getItem("userData"))

document.getElementById("profile").addEventListener("click",function(){
  if(storage){
    window.location.href="./login/signin.html"
  }else{
    window.location.href="./profile/profile.html"
}
})



//   document.querySelector("#courseProfile").addEventListener('click',function(){
//     window.location.href = "./login/signin.html"
//   })