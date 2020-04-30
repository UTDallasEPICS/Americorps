package main

import (
	"fmt" //imports fmt for printing
	"net/http" //imports net/http to handle http requests
)

/*					Fprintf
func Fprintf(w io.Writer, format string, a ...interface{}) (n int, err error)

Fprintf formats according to a format specifier and writes to w. It returns the number of bytes written and any write error encountered.
*/

/*					ResponseWriter
A ResponseWriter interface is used by an HTTP handler to construct an HTTP response.
 */

/*					Request
A Request represents an HTTP request received by a server or to be sent by a client.
 */

/*					HandleFunc
func HandleFunc(pattern string, handler func(ResponseWriter, *Request))

HandleFunc registers the handler function for the given pattern in the DefaultServeMux.
The documentation for ServeMux explains how patterns are matched.
 */

/*					ListenAndServe
func ListenAndServe(addr string, handler Handler) error

ListenAndServe listens on the TCP network address addr and then calls Serve with handler to handle requests on incoming connections.
Accepted connections are configured to enable TCP keep-alives.

The handler is typically nil (same as null in C++), in which case the DefaultServeMux is used.

ListenAndServe always returns a non-nil error.
 */

func index(write http.ResponseWriter, read *http.Request){ //function named index that has a ResponseWriter named write and a pointer to a Request named read
fmt.Fprintf(write, "<h1>Hello World!<h1>") //Prints Hello World! to write using html: <h1>string<h1>
}

func check(write http.ResponseWriter, read *http.Request){ //function named check that has a ResponseWriter named write and a pointer to a Request named read
	fmt.Fprintf(write, "<h1>Health Check<h1>") //Prints Health Check to write using html: <h1>string<h1>
}
func main() {
	http.HandleFunc("/", index) //Executes the index method declared above for the base web application (localhost:3000)
	http.HandleFunc("/health_check",check) //Executes the check method declared above for (localhost:3000/health_check)
	fmt.Println("The Web App should be running")
	http.ListenAndServe(":3000",nil) //runs web app on given address. In this case on the local machine on port 3000 (localhost:3000)
}
