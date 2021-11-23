.PHONY: clean install test lint build

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(PATH)

install:
	npm i -g @teambit/bvm
	bvm install
	bit install

clean:
	rm -rf dist public coverage

clean_all:
	$(MAKE) clean
	$(MAKE) clean_node_modules

build:
	bit build
	nx run-many --target build --all
