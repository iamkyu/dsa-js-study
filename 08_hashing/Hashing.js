function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.buildChains = buildChains;
    this.put = put;
    this.get = get;
}

function put(data) {
    //var pos = this.simpleHash(data);
    var pos = this.betterHash(data);
    var index = 0;

    if (this.table[pos][index] == undefined) {
        this.table[pos][index+1] = data;
    } else {
        ++index;
        while (this.table[pos][index] != undefined) {
            ++index;
        }
        this.table[pos][index] = data;
    }
}

function get(key) {
    var index = 0;
    var pos = this.betterHash(key);
    if(this.table[pos][index] == key) {
        return this.table[pos][index];
    } else {
        index += 2;
        while(this.table[pos][index] != key) {
            index += 2;
        }
        return this.table[pos][index+1];
    }
    return undefined;
}

function simpleHash(data) {
    var total = 0;
    for (var i=0; i<data.length; ++i) {
        total += data.charCodeAt(i);
    }

    return total % this.table.length;
}

function betterHash(data) {
    const H = 37;
    var total = 0;
    for (var i=0; i<data.length; ++i) {
        total += H * total + data.charCodeAt(i);
    }

    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length-1;
    }

    return parseInt(total);
}

function showDistro() {
    var n = 0;
    for (var i=0; i<this.table.length; ++i) {
        if (this.table[i][0] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}

function buildChains() {
    for (var i=0; i<this.table.length; ++i) {
        this.table[i] = new Array();
    }
}