document.querySelector("#learnBtn").addEventListener("click",function(){
    window.location.href="./course/course.html";
})
document.querySelector("#profile").addEventListener("click",function(){
    window.location.href="./login/signin.html";
})

document.querySelector("form").addEventListener("subvmit",function(e){
    e.preventDefault();
})