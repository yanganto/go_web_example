package handlers

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func SetRouter(r *mux.Router) {
	r.HandleFunc("/", HomeHandler)
	r.HandleFunc("/other", otherHandler)
	r.HandleFunc("/{.*}", notFoundHandler)
}

// URL /
// get the home page
func HomeHandler(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "Welcome to the home page!")
}
func notFoundHandler(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "Some thing not found")
}
