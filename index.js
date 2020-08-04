/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
let msg=document.getElementById("greeting").innerHTML ="TEST";
function greet(timing){
  let M = timing.split(':');
  let L=parseInt(M[0]);
  console.log(L);
  if(L<12){
    return "Good Morning";
  }
  else if(L>=12&&L<=17){
    return "Good Afternoon";
  }
  else if(L>17){
    return "Good Evening";
  }
  else{
    return "TEST";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(msg){
  
 let content= document.getElementById("greeting");
 content.innerText=msg;
 console.log(msg);
}