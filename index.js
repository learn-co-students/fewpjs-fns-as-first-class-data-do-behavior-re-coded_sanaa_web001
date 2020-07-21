/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  
  let time=parseInt(timeString,10);
  return (time<12)?"Good Morning":
   (time>12 && time<17 )?
   "Good Afternoon":"Good Evening";
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  document.getElementById('greeting').innerText=message;
  
}
