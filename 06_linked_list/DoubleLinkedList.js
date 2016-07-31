function Node(element) {
	this.element = element;
	this.next = null;
	this.prev = null;
}

function DoubleLinkedList() {
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.findLast = findLast;
	this.display = display;
	this.displayReverse = displayReverse;
}

function find(item) {
	var currNode = this.head;

	while (currNode.element != item) {
		currNode = currNode.next;
	}

	return currNode;
}

function insert(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	newNode.prev = current;
	current.next = newNode;
}

function findLast() {
	var currNode = this.head;

	while (!(currNode.next == null)) {
		currNode = currNode.next;
	}

	return currNode;
}

function remove(item) {
	var currNode = this.find(item);
	if (!(currNode.next == null)) {
		currNode.prev.next = currNode.next;
		currNode.next.prev = currNode.prev;
		currNode.next = null;
		currNode.prev = null;
	}
}

function display() {
	var currNode = this.head;

	while (!(currNode.next == null)) {
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}

function displayReverse() {
	var currNode = this.head;
	currNode = this.findLast();

	while (!(currNode.prev==null)) {
		console.log(currNode.element);
		currNode = currNode.prev;
	}
}