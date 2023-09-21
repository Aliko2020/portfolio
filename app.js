const body = document.body;
const TimeBar = document.querySelector('.time')
const greet = document.getElementById("greeting")
// const togglebtn = document.querySelector('.toggle-btn')
const imag = document.querySelector('.emoji')
const imag2 = document.querySelector('.emoji2')
const resume = document.querySelector('.resume-btn')


hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function() {
    nav.classList.toggle("active");
}

togglebtn.addEventListener('click',()=>{
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    imag.classList.toggle('hideEmoji')
    imag2.classList.toggle('hideEmoji')
    
})

resume.addEventListener('click',()=>{
const linkURL = "https://drive.google.com/file/d/1-bEQwxsmf_CDojtDJwMe3sE5DYCKBOoQ/view?usp=drivesdk"; 
      window.location.href = linkURL;
  
})
    