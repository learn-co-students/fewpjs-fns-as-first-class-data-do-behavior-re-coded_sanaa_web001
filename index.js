/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
// - If the time is earlier than 12pm, return "Good Morning".
// - If the time is between 12pm and 5pm, return "Good Afternoon".
// - If the time is later than 5pm, return "Good Evening".
function greet(timeIn24) {
  // HH:MM format
  let hours = parseInt(timeIn24);
  if (hours < 12) {
    return "Good Morning";
  } else if (hours >= 12 && hours <= 17) {
    return "Good Afternoon";
  } else if (hours > 17) {
    return "Good Evening";
  }
  // return(hours);
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  const greeting = document.querySelector("#greeting");
  console.log(greeting);
  greeting.innerText = string;
}

