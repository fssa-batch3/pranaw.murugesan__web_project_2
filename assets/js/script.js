// index page
const storage = JSON.parse(localStorage.getItem("userData"));
document.querySelector(".profile.btn.btn-info").addEventListener("click", function () {
  window.location.href = "./login/signin.html";
});
document.getElementById("login").addEventListener("click",function () {
  window.location.href="./login/signin.html"
})
