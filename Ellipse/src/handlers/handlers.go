package handlers

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/unrolled/render"
)

func SetRouter(r *mux.Router) {
	r.HandleFunc("/", HomeHandler)
	r.HandleFunc("/other", otherHandler)
	r.HandleFunc("/{.*}", notFoundHandler)
}

// URL /
// get the home page
func HomeHandler(w http.ResponseWriter, req *http.Request) {

	r := render.New()
	r.HTML(w, http.StatusOK, "base", "")
}
func notFoundHandler(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "Some thing not found")
}
