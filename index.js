/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
let timeArray = time.split(':');
if (timeArray[0]<12){
  return "Good Morning";
}
else if (timeArray[0]<=17 && timeArray[0]>=12)
return "Good Afternoon";
else
return "Good Evening";
}
/* Write your implementation of displayMessage() */
function displayMessage(msg){
  let h = document.getElementById("greeting");
  h.innerText = msg;

}
