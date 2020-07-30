/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
   let hour=parseInt(time);
    let morningTime = hour<12;
    let afternoonTime=hour>=12 && hour<=17;
    let eveningTime=hour>17 && hour<=24;
  switch(true) {

    case morningTime :
    return "Good Morning";
          break;
      case afternoonTime:
        return "Good Afternoon";
            break;
        case eveningTime:
        return "Good Evening"
              break;
          default:
          return "wrong, it should be a number less than 25";
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(message){
  const greeting =document.querySelector('#greeting');
  greeting.innerText=message;
}
