function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
	
	// 요소 추가, 제거
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.clear = clear;

	// 비교
	this.compare = compare;	

	// 탐색
	this.find = find;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.contains = contains;

	// 기타 유틸리티
	this.toString = toString;
	this.length = length;
}

function compare(element) {
	//TODO: for문과 if문 중첩 개선 필요
	if (typeof element === 'string') {
		// 텍스트 비교에서 '크다'는 알파벳순으로 나중을 의미
		for (var i=0, end=this.dataStore.length; i<end; i++) {
			var listData =  this.dataStore[i];
			if(element.toLowerCase() > listData.toLowerCase()) 
				return false;
			}
		return true;
	} else {
		for (var i=0, end=this.dataStore.length; i<end; i++) {
			var listData =  this.dataStore[i];
			if(element < listData) 
				return false;
			}
		return true;
	}
}	

function append(element) {
	var isBiggest = this.compare(element);
	if (isBiggest) {
		this.dataStore[this.listSize++] = element;	
	} else {
		console.log(element + " 보다 더 큰 값이 있음");
	}
}

function remove(element) {
	var foundAt = this.find(element);
	if (foundAt > -1) {
		this.dataStore.splice(foundAt, 1);
		--this.listSize;
		return true;
	}

	return false;
}

function find(element) {
	for (var i=0, end=this.dataStore.length; i<end; ++i) {
		if (this.dataStore[i] == element) {
			return i;
		}
	}
	return -1;
}

function length() {
	return this.listSize;
}

function toString() {
	return this.dataStore;
}

function insert(element, after) {
	var insertPos = this.find(after);
	if (insertPos > -1) {
		this.dataStore.splice(insertPos+1, 0, element);
		++this.listSize;
		return true;
	}
	return false;
}

function clear() {
	delete this.dataStore;
	this.dataStore.length = 0;
	this.listSize = this.pos = 0;
}

function contains(element) {
	for (var i=0; i<this.dataStore; ++i) {
		if (this.dataStore[i] == element) {
			return false;
		}
	}
	return false;
}

function front() {
	this.pos = 0;
}

function end() {
	this.pos = this.listSize - 1;
}

function prev() {
	if (this.pos > 0) {
		--this.pos;
	}
}

function next() {
	if (this.pos < this.listSize-1) {
		++this.pos;
	}
}

function currPos() {
	return this.pos;
}

function moveTo(positon) {
	this.pos = positon;
}

function getElement() {
	return this.dataStore[this.pos];
}