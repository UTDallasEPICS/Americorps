package main

import (
	"fmt"
	"time"
)

/*
func Now
func Now() Time
Now returns the current local time.
*/

/*
func (Time) Sub
func (t Time) Sub(u Time) Duration
Sub returns the duration t-u. If the result exceeds the maximum (or minimum) value that can be stored in a Duration, the maximum (or minimum) duration will be returned.
To compute t-d for a duration d, use t.Add(-d).
*/

/*
func (Duration) String
func (d Duration) String() string
String returns a string representing the duration in the form "72h3m0.5s".
Leading zero units are omitted. As a special case, durations less than one second format use a smaller unit (milli-, micro-, or nanoseconds) to ensure that the leading digit is non-zero.
The zero duration formats as 0s.
 */

func main() {
	var time1 time.Time // stores the time started
	var time2 time.Time // stores the time stopped
	var stop string //stores user input
	fmt.Println("Enter N to see how much time has passed") //instructs user to enter N when they want to see how much time has apssed
	time1 = time.Now() //gets time started
	for stop != "N" { //keeps taking in user input until it's N
		fmt.Scan(&stop) //gets user input and stores it in stop
	}
	time2 = time.Now() //when loop terminates gets the time stopped
	var passed time.Duration = time2.Sub(time1) //gets amount of time passed between time1 and time2 by subtracting
	//var test = time.Duration(99999999999999999) //makes a duration that will have hours and minutes
	fmt.Println(passed.String()) //prints duration obtained with loop
	//fmt.Println(test.String()) // prints duration to demonstrate what it will look like with hours and minutes

}