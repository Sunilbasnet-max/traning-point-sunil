const body=document.querySelector("body");
const lightMode=body.querySelector(".light-mode");
lightMode.addEventListener('click',()=>{
    body.classList.toggle("dark");
})