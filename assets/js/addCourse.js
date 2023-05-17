let enroll = document.getElementById("enroll");
// let arr = JSON.parse(localStorage.getItem("course_list"));
arr = localStorage.getItem("course_list")? JSON.parse(localStorage.getItem("course_list"))
: [];
// let user = JSON.parse(localStorage.getItem("profile"));
let res;

enroll.addEventListener("click", (e) => {
  let user = JSON.parse(localStorage.getItem("profile"));
  if (JSON.parse(localStorage.getItem("course_list"))) {
    arr.find((el) => {
      if (el["enrolled_course"] == enroll.dataset.id &&
        el["user_name"] == user.email &&
        el["is_enrolled"] == true) {
          console.log("1")
        return res=1;
      }
      else{
        return res=0
      }
    });
    if(res!=1){
      // else {
        console.log("2")
        let course_id = e.target.dataset.id;
        let enrolled_data = {
          user_name: user.email,
          enrolled_course: course_id,
          is_enrolled: true,
        };
        arr.push(enrolled_data);
  
        localStorage.setItem("course_list", JSON.stringify(arr));
      // }
    }
  }
 
  
  else {
    console.log("3")
    let course_id = e.target.dataset.id;
    let enrolled_data = {
      user_name: user.email,
      enrolled_course: course_id,
      is_enrolled: true,
    };
    arr.push(enrolled_data);

    localStorage.setItem("course_list", JSON.stringify(arr));
  }

  // console.log(enrolled_data);
  // arr = localStorage.getItem("course_list")? JSON.parse(localStorage.getItem("course_list"))
  //   : [];
  // console.log(arr);

  // window.location.href = "./webhacking.html";
});

// arr.find((el) => {
//   if (el["enrolled_course"] == enroll.dataset.id && el["user_name"] == user.email && el["is_enrolled"] == true) {
//     // checkbox[0].setAttribute("checked", "");
//     // e.target.parentElement.parentElement.setAttribute("href","#")

//     // enroll.setAttribute("disabled","")
//     enroll.style.display="";
//     // enroll.style.backgroundColor="black"
//       // e.target.style.display="none"
// // return res=1;

// }
// // else{
// //   //./stagesOfHacking.html
// //   e.target.parentElement.parentElement.setAttribute("href","./stagesOfHacking.html")
// // }
// });

// arr.find((el) => {
//   if (el["enrolled_course"] == enroll.dataset.id && el["user_name"] == user.email) {
//     // checkbox[0].setAttribute("checked", "");
//     // checkbox[0].setAttribute("disabled", "")
//     alert("already enrolled");
//   }
// });
