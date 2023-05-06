document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  signup();
});
const signup = () => {
  // Initialising variables
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  email = email.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const confirm_password = document.getElementById("confirm_password").value;

  const salt = CryptoJS.lib.WordArray.random(16).toString();

  // Hash the password using PBKDF2
  const iterations = 1000;
  const keyLen = 64;
  const hashedPassword = CryptoJS.PBKDF2(password, salt, {
    keySize: keyLen / 32,
    iterations: iterations,
  }).toString();

  // let Password= [];
  let encryptedPassword = {
    "Hashed password": hashedPassword,
    "Salt": salt,
  };

  let arr;
  let userList = {
    firstname: fname,
    lastname: lname,
    email: email,
    password: encryptedPassword,
  };
  let users = JSON.parse(localStorage.getItem("userData"));
  let res;
  if (password !== confirm_password) {
    swal("Sorry :(", "Password Mismatch !!", "error");
  } else {
    if (users) {
      arr = JSON.parse(localStorage.getItem("userData"))
      users.find((e) => {

        if (e["email"] == email) {
          return res = 1;
        }
        else {
          return res = 0;
        }
      })
      if (res == 1) {
        // alert("Email already registered")
        swal("Sorry :(", "Account already exist!", "error");
      }
      else {
        arr.push(userList)
        localStorage.setItem("userData", JSON.stringify(arr))
        window.location.href = "./signin.html";
      }
    }
    else {
      arr = []
      arr.push(userList)
      localStorage.setItem("userData", JSON.stringify(arr))
      swal("Good job!", "Successfully Created Account!", "success");
      window.location.href = "./signin.html";
    }
  }
};
