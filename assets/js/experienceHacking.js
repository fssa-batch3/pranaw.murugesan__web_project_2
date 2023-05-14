const popUpConfirm = document.querySelector(".popUpConfirm");
const okayBtn = document.querySelector("#okayBtn");
// showing the pop up
function confirmationPopUp() {
  popUpConfirm.classList.add("view");
  document.querySelector("main").style.filter = "blur(8px)";
  document.querySelector("header").style.filter = "blur(8px)";
}
// setting timeout
setTimeout(confirmationPopUp, 2000);
// closing the pop up
okayBtn.addEventListener("click", function () {
  popUpConfirm.classList.remove("view");
  document.querySelector("main").style.filter = null;
  document.querySelector("header").style.filter = null;
});
