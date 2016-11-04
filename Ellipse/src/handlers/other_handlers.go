package handlers

import (
	"net/http"

	"github.com/unrolled/render"
)

// URL /other
// example for other
func otherHandler(w http.ResponseWriter, req *http.Request) {
	r := render.New()
	r.JSON(w, http.StatusOK, map[string]string{"key": "RealValue"})
}
