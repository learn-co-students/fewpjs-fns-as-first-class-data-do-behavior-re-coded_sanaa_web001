/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick());

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
let n = "text";
function greet(n){
  let ip = n.split(':');
  let x = parseInt(ip[0],10);
  if (x < 12){
  return 'Good Morning';
  }
  else if (x >= 12 && x < 17){
   return "Good Afternoon";
  }
  else{ 
   return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
  let testContent = "TEST";
   function   displayMessage(testContent){
      let content = document.getElementById("greeting").innerText = testContent;   }