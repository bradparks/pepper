
run:
	open -n -a node-webkit ../pepper-app

clean:
	rm -f build/*

build: clean
	component install
	component build -v