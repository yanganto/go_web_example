GOCMD=go
GODOC=godoc
GOBUILD=$(GOCMD) build
GOINSTALL=$(GOCMD) install
GOCLEAN=$(GOCMD) clean
GOGET=$(GOCMD) get
GOOS=linux
GOARCH=amd64

WEBPACK=./node_modules/webpack/bin/webpack.js

BINARY=Ellipse
.DEFAULT_GOAL: $(BINARY)

ALL_LIST = handlers
STATIC_FOLDER = ./static
PUBLIC_FOLDER = public
DOC_FOLDER = $(PUBLIC_FOLDER)/doc
FOLDERS_LIST = $(DOC_FOLDER) $(STATIC_FOLDER)/vue $(STATIC_FOLDER)/img $(STATIC_FOLDER)/js
BUILD_LIST = $(foreach int, $(ALL_LIST), $(int).a)
VUE_LIST = example

$(BINARY): pkg/$(GOOS)_$(GOARCH)/$(BUILD_LIST) generate_doc process_img $(PUBLIC_FOLDER)/build.js
	$(GOBUILD) -o $(BINARY)

$(BUILD_LIST): %.a:
	$(GOINSTALL) $*

$(PUBLIC_FOLDER)/build.js: compile_vue $(STATIC_FOLDER)/js/app.js
		$(WEBPACK) $(STATIC_FOLDER)/js/app.js $(PUBLIC_FOLDER)/build.js

generate_doc:
	$(GODOC) handlers > $(DOC_FOLDER)/handlers

compile_vue:
	vue-compiler --out $(STATIC_FOLDER)/js $(STATIC_FOLDER)/vue/*.vue

process_img:
	echo "processing img"


.PHONY: init clean extinct help
init:
	$(GOGET) github.com/gorilla/mux
	$(GOGET) github.com/urfave/negroni
	mkdir -p $(FOLDERS_LIST)
	npm install webpack vue-loader vueify

clean:
	$(GOCLEAN)
	$(GOCLEAN) -i $(ALL_LIST)
	rm $(PUBLIC_FOLDER)/build.js
	rm -rf $(DOC_FOLDER)/*
	rm $(STATIC_FOLDER)/js/$(VUE_LIST).js

extinct: clean
	rm -rf ./bin ./pkg $(PUBLIC_FOLDER)/*
	rm -rf ./src/github.com
	rm -rf ./node_modules
	mkdir -p $(DOC_FOLDER)

help:
	@echo Please install go and npm and set up GOPATH to Ellipse folder
	@echo make init to init the environment
	@echo staic files in static folder will be compile via webpack to public folder
