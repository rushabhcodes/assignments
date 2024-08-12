function formatTime(date) {

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
   
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    // 24-hour format
    const time24 = `${hours}:${minutes}:${seconds}`;
  
    // 12-hour format with AM/PM
    let hours12 = date.getHours();
    const ampm = hours12 >= 12 ? 'PM' : 'AM';
    hours12 = hours12 % 12;
    hours12 = hours12 ? hours12 : 12; 
    const time12 = `${hours12 < 10 ? '0' + hours12 : hours12}:${minutes}:${seconds} ${ampm}`;
  
    return { time24, time12 };
  }
  
  function displayTime() {
    const now = new Date();
    const { time24, time12 } = formatTime(now);
  
    console.log(`24-hour format: ${time24}`);
    console.log(`12-hour format: ${time12}`);
  }
  
  // Update the time every second
  setInterval(displayTime, 1000);