function Set() {
    this.datsStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.contains = contains;
    this.show = show;
}

function add(data) {
    if (this.datsStore.indexOf(data) < 0) {
        this.datsStore.push(data);
        return true;
    } else {
        return false;
    }
}

function remove(data) {
    var pos = this.datsStore.indexOf(data);
    if (pos > -1) {
        this.datsStore.splice(pos, 1);
        return true;
    } else {
        return false;
    }
}

function union(set) {
    var tempSet = new Set();
    for (var i=0; i<this.datsStore.length; ++i) {
        tempSet.add(this.datsStore[i]);
    }

    for (var i=0; i<set.datsStore.length; ++i) {
        if (!tempSet.contains(set.datsStore[i])) {
            tempSet.datsStore.push(set.datsStore[i]);
        }
    }
    return tempSet;
}

function intersect(set) {
    var tempSet = new Set();
    for (var i=0; i<this.datsStore.length; ++i) {
        if (set.contains(this.datsStore[i])) {
            tempSet.add(this.datsStore[i]);
        }
    }
    return tempSet;
}

function subset(set) {
    if (this.size() > set.size()) {
        return false;
    } else {
        for(var k in this.dataStore) {
            if (!set.contains(this.dataStore[k])) {
                return false;
            }
        }
        return true;
    }
}

function difference(set) {
    var tempSet = new Set();
    for (var i=0; i<this.datsStore.length; ++i) {
        if (!set.contains(this.datsStore[i])) {
            tempSet.add(this.datsStore[i]);
        }
    }
    return tempSet;
}

function size() {
    return this.datsStore.length;
}

function contains(data) {
    if (this.datsStore.indexOf(data) > -1) {
        return true;
    } else {
        false;
    }
}

function show() {
    return this.datsStore;
}