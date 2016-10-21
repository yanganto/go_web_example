GOCMD=go
GODOC=godoc
GOBUILD=$(GOCMD) build
GOCLEAN=$(GOCMD) clean
GOGET=$(GOCMD) get

WEBPACK=./node_modules/webpack/bin/webpack.js

BINARY=Ellipse
.DEFAULT_GOAL: $(BINARY)

ALL_LIST = handlers
STATIC_FOLDER = ./static
DOC_FOLDER = $(STATIC_FOLDER)/doc
FOLDERS_LIST = $(STATIC_FOLDER) $(DOC_FOLDER) ./vue ./img ./js
BUILD_LIST = $(foreach int, $(ALL_LIST), $(int).a)
VUE_LIST = example

$(BINARY): $(BUILD_LIST) generate_doc process_img build.js
	$(GOBUILD) -o $(BINARY)

$(BUILD_LIST): %.a:
	$(GOBUILD) $*

build.js: compile_vue js/app.js
		$(WEBPACK) js/app.js static/build.js

generate_doc:
	$(GODOC) handlers > $(DOC_FOLDER)/handlers

compile_vue:
	vue-compiler --out js vue/*.vue

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
	$(GOCLEAN) $(ALL_LIST)
	rm -rf $(DOC_FOLDER)/*
	rm static/build.js
	rm js/$(VUE_LIST).js

extinct: clean
	rm -rf ./bin ./pkg $(STATIC_FOLDER)/*
	rm -rf ./src/github.com
	rm -rf ./node_modules
	mkdir -p $(DOC_FOLDER)

help:
	@echo Please install go and npm and set up GOPATH to Ellipse folder
	@echo make init to init the environment
