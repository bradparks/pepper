
run:
	open -n -a node-webkit .

clean:
	rm -f build/*

build: clean
	component install
	component build -v