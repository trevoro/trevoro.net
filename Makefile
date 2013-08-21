.PHONY: clean
clean:
	rm -rf _site/*

.PHONY: setup
setup:
	bundle install

build:	
	bundle exec jekyll build

.PHONY: deploy
deploy:
	ssh root@trevoro.net -A '. /etc/profile.d/rbenv.sh && cd /data/www/trevoro.net && git pull && bundle install && make build'

run:
	bundle exec jekyll serve --watch
