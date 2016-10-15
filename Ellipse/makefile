GOCMD=go
GODOC=godoc
GOBUILD=$(GOCMD) build
GOCLEAN=$(GOCMD) clean
GOGET=$(GOCMD) get

BINARY=Ellipse
.DEFAULT_GOAL: $(BINARY)

ALL_LIST = handlers
STATIC_FOLDER = ./static
DOC_FOLDER = $(STATIC_FOLDER)/doc
FOLDERS_LIST = $(STATIC_FOLDER) $(DOC_FOLDER) ./vue ./img
BUILD_LIST = $(foreach int, $(ALL_LIST), $(int).a)

$(BINARY): $(BUILD_LIST) generate_doc compile_vue process_img
	$(GOBUILD) -o $(BINARY)

$(BUILD_LIST): %.a:
	$(GOBUILD) $*

generate_doc:
	$(GODOC) handlers > $(DOC_FOLDER)/handlers

compile_vue:
	echo "compiling .vue"

process_img:
	echo "processing img"


.PHONY: init clean extinct
init:
	$(GOGET) github.com/gorilla/mux
	$(GOGET) github.com/urfave/negroni
	mkdir -p $(FOLDERS_LIST)

clean:
	$(GOCLEAN)
	$(GOCLEAN) $(ALL_LIST)
	rm -rf $(DOC_FOLDER)/*

extinct: clean
	rm -rf ./bin ./pkg $(STATIC_FOLDER)/*
	mkdir -p $(DOC_FOLDER)
