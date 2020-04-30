package main

import (
	"fmt"
	"net/http"
)

func clockInOut(write http.ResponseWriter, read *http.Request) { //function named clockInOut that has a ResponseWriter named write and a pointer to a Request named read
	http.ServeFile(write, read, "out.html") //Uses ResponseWriter and Request to serve a file. In this case the html file for the clock in/out page
}

func main() {
	http.HandleFunc("/", clockInOut) //Executes the clockInOut method declared above for the base web application (localhost:3000)
	fmt.Println("The Web App should be running")
	http.ListenAndServe(":3000", nil) //runs web app on given address. In this case on the local machine on port 3000 (localhost:3000)

}
