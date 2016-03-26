npm_bin = $$(npm bin)
git_version = $$(git branch 2>/dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/')

install:
	@npm install
server: install
	@${npm_bin}/startserver
build:
	@$(pwd)./build.sh
