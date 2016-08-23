class CustomArray {
    constructor(size) {
        this.dataStore = [];
        this.pos = 0;
        this.size = size;

        this.init();
    }

    init() {
        for (let i=0; i<this.size; ++i) {
            this.dataStore[i] = i;
        }
    }

    setData() {
        for (let i=0; i<this.size; ++i) {
            this.dataStore[i] = Math.floor(Math.random() * (this.size+1));
        }
    }

    insert(elemnet) {
        this.dataStore[this.pos++] = elemnet;
    }

    clear() {
        for (let i=0; i<this.size; ++i) {
            this.dataStore[i] = 0;
        }
    }

    swap(arr, idx1, idx2) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    toString() {
        return this.dataStore.join(',');
    }
}