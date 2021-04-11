import React from "react";
import AddUserButton from '../components/AddUserButton.js';
import EditUserButton from "../components/EditUserButton.js";
import DeleteUserButton from "../components/DeleteUserButton.js";
import UserBar from  '../components/UserBar';

/* Generates current month and year */
function MonthYear(){
  let newDate = new Date();
  let monthNumber = newDate.getMonth(); 
  let year = newDate.getFullYear();
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let monthName = monthNames[monthNumber];
  var monthAndYear = monthName + " " + year;
  return monthAndYear;
}

/* Add method to calculate total user hours for current month here */
function totalHoursThisMonth(){
  return 2637.25; 
}

/* Add method to calculate total user hours for current year here */
function totalHoursThisYear(){
  return 2703.25;
}

/* Test case for the user bar*/
const testData = [
  /* Insert user's completed hours, total hours, and name  into the user bar component*/
  { completed: 60, totalHours: 100, username: "Briauna Derry"}
];

function Users() {
  return (
    <div className="Users">

      {/* Month Year in top left */}
      <h1 className="UsersDate">{MonthYear()}</h1>

      {/* Add User Button in top right */}
      <AddUserButton/>

      {/* Add User Component Here*/}
      {testData.map((item, idx) => (
        <UserBar key={idx} completed={item.completed} totalHours= {item.totalHours} username={item.username} />
      ))}

      {/* Edit User Button*/}
      <EditUserButton />

      {/* Delete User Button */}
      <DeleteUserButton />

      {/* Calculate Monthly Total Hours in bottom left*/}
      <h1 className="MonthlyTotal">
        Monthly Total: {totalHoursThisMonth()} hrs
      </h1>

      {/* Calculate Yearly Total Hours in bottom right*/}
      <h1 className="YearlyTotal">
        Yearly Total: {totalHoursThisYear()} hrs
      </h1>

    </div>
  );
}

export default Users;