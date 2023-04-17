const arr = JSON.parse(localStorage.getItem("userData")); // getting data from localStorage
const profile = JSON.parse(localStorage.getItem("profile"));
// console.log(profile)
let check;
let res;

//assigning variables
let email = document.getElementById("email");
let editFname = document.getElementById("editfname");
let editLname = document.getElementById("editlname");
let editEmail = document.getElementById("editEmail");
let name = document.getElementById("name");
let welcomeText = document.getElementById("welcome");
let gender = document.getElementById("male");
let genderfemale = document.getElementById("female");

// showing datas in Profile Page
arr.find((element) => {
  if (element["email"] == profile["email"]) {
    return (res = element);
  }
});
name.innerText = res["firstname"] + " " + res["lastname"];
editFname.value = res["firstname"];
editLname.value = res["lastname"];
email.innerText = res["email"];
editEmail.value = res["email"];
if(res["gender"]=="male"){
     gender.setAttribute("checked","")
}
if(res["gender"]=="female"){
  genderfemale.setAttribute("checked","")
}
welcomeText.innerText = `Hiii  ${res["firstname"]} !!` + " 🖖";

welcomeText.style.textTransform = "Uppercase"; //UpperCasing Welcome Text

//Switch accounts btn
document.getElementById("switch").addEventListener("click", function () {
  window.location.href = "../login/signin.html";
});

//Edit Profile
document.getElementById("editProfile").addEventListener("click", function () {
  let editForm = document.getElementsByClassName("edit");
  editForm[0].classList.add("view");

  document.querySelector(".container").style.filter = "blur(8px)";
  document.querySelector("header").style.filter = "blur(8px)";
  document.querySelector(".switch").style.filter = "blur(8px)";
});

//showing datas in edit profile div

document.getElementById("Save").addEventListener("click", (e) => {
  // e.preventDefault();
  arr.find((f) => {
    if (f["email"] == editEmail.value) {
      f["firstname"] = editFname.value;
      f["lastname"] = editLname.value;

      if (gender.checked) {
        res["gender"] = "male";
      }

      if (genderfemale.checked) {
        res["gender"] = "female";
      }
      localStorage.setItem("userData", JSON.stringify(arr));
      return (check = f);
    }
  });
});

//Cancel btn in Edit Profile
document.getElementById("Cancel").addEventListener("click", function () {
  window.location.href = "./profile.html";
});

//Delete profile Btn
// document.getElementById("deleteProfile").addEventListener("click", function () {

//     let confirmMessage = confirm("are you want to delete your profile")

//     if (confirmMessage == true) {
//         for (let k = 0; k < arr.length; k++) {
//             if (editEmail.value == arr[k]["email"]) {
//                 arr.splice(k, 1)
//                 localStorage.removeItem("profile");
//                 localStorage.setItem("userData", JSON.stringify(arr))
//
//             }
//         }
//     }
// })

//Delete profile Btn
document.getElementById("deleteProfile").addEventListener("click", function () {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this account!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      for (let k = 0; k < arr.length; k++) {
        if (editEmail.value == arr[k]["email"]) {
          arr.splice(k, 1);
          localStorage.removeItem("profile");
          localStorage.setItem("userData", JSON.stringify(arr));
          window.location.href = "../login/signin.html";
        }
      }
    } else {
      swal("Your Account is safe!");
    }
  });
});
