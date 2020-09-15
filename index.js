/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let x = parseInt(time);
  if (x <= 12) {
    return `Good Morning`;
  }
   if (x > 12 && x <= 15) {
    return `Good Afternoon`;
  }
  if(x > 15 ) {
    return `Good Evening`;
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(d) {
  document.getElementById("greeting").innerText  = d;
}
