function Stack() {
	this.datsStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.length = length;
	this.clear = clear;
}

function push(element) {
	this.datsStore[this.top++] = element;
}

function pop() {
	return this.datsStore[--this.top];
}

function peek() {
	return this.datsStore[this.top-1];
}

function length() {
	return this.top;
}

function clear() {
	this.top = 0;
}