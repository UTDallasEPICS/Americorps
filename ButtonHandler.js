
function disableButton(buttonId)
{
    document.getElementById(buttonId).setAttribute("disabled","disabled"); //gets button using given id and disables it

    if(buttonId === "Clock In Button") //displays clock in message and enables clock out button
    {
        document.getElementById("clocked in").setAttribute("style","position: fixed; margin-left: 20%; margin-top: 18%"); //displays clocked in message
        document.getElementById("Clock Out Button").disabled = false; //enabled clock out button

    }

    else if(buttonId === "Clock Out Button") //displays clock out message and disables clock out button
    {
        document.getElementById("clocked out").setAttribute("style","position: fixed; margin-left: 70%; margin-top: 18%"); //displays clocked out message
    }

}

let clockInButton = document.getElementById("Clock In Button"); //assigns clockIn button in the html file to a variable using its id
clockInButton.addEventListener("click", ()=>disableButton(clockInButton.id)); //disables clock in button if it is clicked

let clockOutButton = document.getElementById("Clock Out Button"); //assigns clockOut button in the html file to a variable using its id
clockOutButton.addEventListener("click", ()=>disableButton(clockOutButton.id)); //disables clock out button if it is clicked
