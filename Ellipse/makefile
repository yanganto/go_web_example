GOCMD=go
GODOC=godoc
GOBUILD=$(GOCMD) build
GOINSTALL=$(GOCMD) install
GOCLEAN=$(GOCMD) clean
GOGET=$(GOCMD) get
GOOS=linux
GOARCH=amd64

WEBPACK=node_modules/webpack/bin/webpack.js

BINARY=Ellipse
.DEFAULT_GOAL: $(BINARY)

ALL_LIST = handlers
STATIC_FOLDER = static
TEMPLATE_FOLDER = templates
PUBLIC_FOLDER = public
DOC_FOLDER = $(PUBLIC_FOLDER)/doc
FOLDERS_LIST = $(TEMPLATE_FOLDER) $(DOC_FOLDER) $(STATIC_FOLDER)/vue $(STATIC_FOLDER)/img $(STATIC_FOLDER)/js
BUILD_LIST = $(foreach int, $(ALL_LIST), pkg/$(GOOS)_$(GOARCH)/$(int).a)
VUE_LIST = example

$(BINARY): $(BUILD_LIST) generate_doc process_img $(PUBLIC_FOLDER)/build.js
	$(GOBUILD) -o $(BINARY)

$(BUILD_LIST): %.a:
	$(GOINSTALL) $(notdir $*)

$(PUBLIC_FOLDER)/build.js: $(STATIC_FOLDER)/js/app.js
	$(WEBPACK)

generate_doc:
	$(GODOC) -html handlers > $(DOC_FOLDER)/handlers

compile_vue:
	vue-compiler --out $(STATIC_FOLDER)/js $(STATIC_FOLDER)/js/vue/*.vue

process_img:
	@echo process image here


.PHONY: init clean help
init:
	$(GOGET) github.com/gorilla/mux
	$(GOGET) github.com/urfave/negroni
	$(GOGET) github.com/unrolled/render
	mkdir -p $(FOLDERS_LIST)
	npm install webpack vue-loader vueify

clean:
	$(GOCLEAN)
	$(GOCLEAN) -i $(ALL_LIST)
	rm $(PUBLIC_FOLDER)/build.js
	rm -rf $(DOC_FOLDER)/*
	rm $(STATIC_FOLDER)/js/$(VUE_LIST).js

distclean: clean
	rm -rf bin pkg $(PUBLIC_FOLDER)/*
	rm -rf src/github.com
	rm -rf node_modules
	mkdir -p $(DOC_FOLDER)

help:
	@echo Please install go and npm and set up GOPATH to Ellipse folder
	@echo make init to init the environment
	@echo staic files in static folder will be compile via webpack to public folder
