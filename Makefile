.PHONY: clean install test lint build depgraph depcheck

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

depgraph:
	depcruise apps/home --progress --config .dependency-cruiser.js --output-type ddot  --output-to depgraph.dot
	cat depgraph.dot | dot -T svg > depgraph.svg.tmp
	mv depgraph.svg.tmp depgraph.svg

depcheck:
	depcruise . --progress --config .dependency-cruiser.js

