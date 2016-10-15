package main

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/urfave/negroni"

	"handlers"
)

func main() {
	router := mux.NewRouter()
	handlers.SetRouter(router)
	n := negroni.Classic() // Includes some default middlewares
	n.Use(negroni.NewStatic(http.Dir("./static")))
	n.UseHandler(router)

	http.ListenAndServe(":3000", n)
}
