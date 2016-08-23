class BubbleSort {
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

    bubbleSort() {
        let arrayLength = this.dataStore.length;
        let temp;

        console.log("=============== 버블정렬 ===============");
        for (let outer = arrayLength; outer >= 2; --outer) {
            for (let inner = 0; inner <= outer-1; ++inner) {
                if (this.dataStore[inner] > this.dataStore[inner+1]) {
                    this.swap(inner, inner+1);
                }
            }
            console.log((this.dataStore.length - outer + 1) + "회전: " + this.dataStore.toString());
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