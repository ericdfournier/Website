package main

import (
	"google.golang.org/appengine"
	"log"
	"net/http"
)

func main() {
	port := ":8080"
	root := http.Dir("public")
	handler := http.FileServer(root)
	http.Handle("/", handler)
	log.Fatal(http.ListenAndServe(port, nil))
	appengine.Main()
}
