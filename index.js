/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(timeString){
  let h = timeString.split(':');
  h = parseInt(h);

  if(h<12)
  {
    return "Good Morning";
  }
  else if(h>=12 && h <= 17){
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }


}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function displayMessage(massg){
  document.getElementById("greeting").innerText=massg; 
  
}
