class SelectionSort {
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

        this.shuffle();
    }

    selectionSort() {
        let arrayLength = this.dataStore.length;
        let smallest;

        console.log("=============== 선택정렬 ===============");
        for (let outer = 0; outer <= arrayLength-2; ++outer) {
            smallest = outer;

            for (let inner = outer+1; inner <= arrayLength-1; ++inner) {
                if (this.dataStore[inner] < this.dataStore[smallest]) {
                    smallest = inner;
                }
            }
            this.swap(outer, smallest);
            console.log((outer + 1) + "회전: " + this.dataStore.toString());
        }
    }

    shuffle() {
        let seed;
        let temp;

        for (let i=0; i<this.dataStore.length; ++i) {
            seed = Math.floor(Math.random()*(this.dataStore.length));
            temp = this.dataStore[i];
            this.dataStore[i] = this.dataStore[seed];
            this.dataStore[seed] = temp;
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

    swap(idx1, idx2) {
        let temp = this.dataStore[idx1];
        this.dataStore[idx1] = this.dataStore[idx2];
        this.dataStore[idx2] = temp;
    }

    toString() {
        return "[" + this.dataStore.join(',') + "]";
    }
}