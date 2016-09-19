npm_bin = `npm bin`

install:
	@npm install
server: install
	@${npm_bin}/startserver
build:
	@$(pwd)./build.sh
