// DECLARING VARIABLES
const popUpMail = document.querySelector(".popUpMail");
const popUpMailSentBtn = document.querySelector("#btn-okay");
const popUpConfirm = document.querySelector(".popUpConfirm");
const popUpMailSent = document.querySelector(".mailSent");
const BtnYes = document.querySelector("#BtnYes");
const BtnNo = document.querySelector("#BtnNo");

// A MESSGAE FOR EMAIL
let message = `<h3>Hello,<br>
            I Hacked your computer and I've compromised it fully.<br>
            I know what kind of people you've been talking to, what kind of videos that<br>
            you're watching. I know you wouldn't believe me. But, I have all your datas<br>
            If you don't respond to this email, i will expose your datas to online<br><br>
            If you don't want your information to get leaked, contact to this email scryptify.corporation@gmail.com<br><br>
            You have only 24 hours to respond.</h3>`;

            // SENDING EMAIL
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "scryptify.corp@gmail.com",
    Password: "AC52B297611FB767F3C069A34A87E8AD46E7",
    To: email,
    From: "scryptify.corporation@gmail.com",
    Subject: "YOUR COMPUTER IS HACKED !!!",
    Body: message,
    BodyHtml: message,
  }).then((message) => {
    popUpMail.style.display = "none";
    popUpMailSent.style.display = "block";
  });
});

// BLURRING BACKGROUND
document.querySelector(".mainDiv").style.filter = "blur(8px)";
document.querySelector("header").style.filter = "blur(8px)";

// SHOWING MAIL SENT DIV
popUpMailSentBtn.addEventListener("click", function () {
  popUpMailSent.style.display = "none";
  popUpConfirm.style.display = "block";
  document.querySelector(".mainDiv").style.filter = "blur(8px)";
  document.querySelector("header").style.filter = "blur(8px)";
});
// CONFIRMATION YES BUTTON
BtnYes.addEventListener("click", function () {
  popUpConfirm.style.display = "none";
  document.querySelector(".mainDiv").style.filter = null;
  document.querySelector("header").style.filter = null;
});
// CONFIRMATION NO BUTTON 
BtnNo.addEventListener("click", function () {
  popUpConfirm.style.display = "none";
  popUpMail.style.display = "block";
});
