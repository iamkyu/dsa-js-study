class HashTable {
    constructor() {
        this.dataStore = [];
    }

    hash(key) {
        let hashCode = 5381;
        for (let i=0; i<key.length; i++) {
            hashCode = hashCode * 33 + key.charCodeAt(i);
        }
        return hashCode % 1013;
    }

    //FIXME: 객체로 해시테이블에 저장 방법 필
    valuePair(key, value) {
        let obj = new Object();

        obj.key = key;
        obj.value = value;
        obj.toString = "[" + key + "-" + value + "]";

        return obj;
    };


    put(key, value) {
        let position = this.hash(key);
        console.log(position);

        if(this.dataStore[position] == undefined) {
            this.dataStore[position] = this.valuePair(key, value);
        } else {
            let index = ++position;
            while (this.dataStore[index] != undefined) {
                index++;
            }
            this.dataStore[index] = this.valuePair(key, value);
        }
    }

    find(key) {
        let position = this.hash(key);

        if (this.dataStore[position] !== undefined) {
            return this.dataStore[position].value;
        } else {
            var index = ++position;
            while (this.dataStore[index] === undefined || this.dataStore[index].key!=key) {
                index++;
            }

            if (this.dataStore[index].key === key) {
                return this.dataStore[index].value;
            }
        }
        return undefined;
    }

    print() {
        for (let i=0; this.dataStore.length; ++i) {
            if (this.dataStore[i] !== undefined) {
                console.log(this.dataStore[i].toString);
            }
        }
    }
}