.PHONY: clean
clean:
	rm -rf _site/*

.PHONY: setup
setup:
	bundle install

build:	
	bundle exec jekyll build

run:
	bundle exec jekyll serve --watch
