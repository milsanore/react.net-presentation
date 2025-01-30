#!make
SHELL:=/bin/bash

NOW:=$(shell date -u +%Y-%m-%dT%H:%M:%S%Z)

# pp - pretty print function
yellow := $(shell tput setaf 3)
normal := $(shell tput sgr0)
define pp
	@printf '$(yellow)$(1)$(normal)\n'
endef

.PHONY: help
help: Makefile
	@echo " Choose a command to run:"
	@sed -n 's/^##//p' $< | column -t -s ':' | sed -e 's/^/ /'

## init: start from zero
.PHONY: init
init:
	if [ -d "dist" ]; then rm -r "dist"; fi
	npm ci


## build: build the app
.PHONY: build
build:
	npm run build

## dev: run dev
.PHONY: dev
dev:
	npm run start
