const body = document.body;
const TimeBar = document.querySelector('.logo')
const greet = document.getElementById("greeting")
const togglebtn = document.querySelector('.toggle-btn')


hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function() {
    nav.classList.toggle("active");
}

togglebtn.addEventListener('click',()=>{
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    console.log('hhhh');
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
      return "GOOD MORNING🛌🏿";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "GOOD AFTERNOON🌕";
    } else {
      return "GOOD EVENING🌚";
    }
  }
  
  const currentTimeFormatted = getCurrentTimeFormatted();
  const greeting = getGreetingBasedOnTime();
  
  
  

  
  
  