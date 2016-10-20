package handlers

import (
	"fmt"
	"net/http"
)

// URL /other
// example for other
func otherHandler(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "the other Handler")
}
