const body = document.body;
const TimeBar = document.querySelector('.time')
const greet = document.getElementById("greeting")
const togglebtn = document.querySelector('.toggle-btn')
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
const linkURL = "https://github.com/Aliko2020/resume/blob/main/Amos_Aliko_CV.pdf"; 
      window.location.href = linkURL;
  
})
function getCurrentTimeFormatted() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
  
    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours || 12; // If hours is 0, set it to 12
  
    // Add leading zero to minutes if needed
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
    return `${hours}:${formattedMinutes}${ampm}`;
  }
  
  function getGreetingBasedOnTime() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
  
    if (currentHour >= 5 && currentHour < 12) {
      return "Good morning🌄";
    } else if (currentHour > 12 && currentHour < 17) {
      return "Good afternoon🌞";
    } else if(currentHour >17 && currentHour <21){
      return "Good evening!"
    }else
    {
      return "Good Night🌚";
    }
  }
  
  const currentTimeFormatted = getCurrentTimeFormatted();
  const greeting = getGreetingBasedOnTime();
 greet.textContent = greeting
  
  

  
  
  