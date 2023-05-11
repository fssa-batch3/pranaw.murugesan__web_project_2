// declaring variables
let form = document.getElementById("form");
let dontHaveAccount = document.getElementById("dontHaveAccount");
let storedPassword;
let storedSalt;
// performing login function
form.addEventListener("submit", (e) => {
  e.preventDefault();
  login();
});
// redirecting to signup Page
dontHaveAccount.addEventListener("click", function () {
  window.location.href = "./signup.html";
});
function login() {
  // declaring variables for login
  let email = document.getElementById("email").value;
  email = email.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const arr = JSON.parse(localStorage.getItem("userData")); //variable for localStorage

  let login = {
    email: email,
  };
  let res;
// Retrieving Hashed password 
  arr.find((e) => {
    if (e["email"] == email) {
      storedPassword = e["password"]["Hashed password"];
      storedSalt = e["password"]["Salt"];
    }
  });

  // Hash the entered password using PBKDF2 with the same salt and iterations as the stored password
  const iterations = 1000;
  const keyLen = 64;

  // Converting input into hash
  let key = CryptoJS.PBKDF2(password, storedSalt, {
    keySize: keyLen / 32,
    iterations,
  });
  key = key.toString(CryptoJS.enc.Hex);

  arr.find((element) => {
    if (
      element["email"] == email &&
      element["password"]["Hashed password"] == key
    ) {
      return (res = 1);
    } else {
      return (res = 0);
    }
  });
  if (res === 1) {
    // alert("Logged in")
    swal("Hooyah !", "You have logged in !").then((value) => {
      localStorage.setItem("profile", JSON.stringify(login));
      window.location.href = "../course/choose.html";
    });
  } else {
    // alert('Account doesn\'t exist')
    swal("Sorry :(", "Account doesn't exist!", "error");
  }
}
