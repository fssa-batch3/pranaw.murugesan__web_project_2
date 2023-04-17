// declaring variables
let form = document.getElementById("form")
let dontHaveAccount = document.getElementById('dontHaveAccount')
// performing login function
form.addEventListener("submit", (e) => {
  e.preventDefault();
  login()
})
// redirecting to signup Page
dontHaveAccount.addEventListener("click", function () {
  window.location.href = "./signup.html"
})
function login() {
  // declaring variables for login
  let email = document.getElementById("email").value;
  email = email.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const arr = JSON.parse(localStorage.getItem("userData")); //variable for localStorage
  
  let login = {
    "email": email
  }
  let res;
  arr.find(element => {
    if (element["email"] == email && element["password"] == password) {
      return res = 1
    } else {
      return res = 0;
    }
  })
  if (res === 1) {
    // alert("Logged in")
    swal("Hooyah !", "You have logged in !")
      .then((value) => {
        localStorage.setItem("profile", JSON.stringify(login))
        window.location.href = "../course/course.html"
      });

  } else {
    // alert('Account doesn\'t exist')
    swal("Sorry :(", "Account doesn't exist!", "error");

  }
}