class QuickSort {
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

    quickSort(arr) {
        if(!arr) {
            arr = this.dataStore;
        }

        if (arr.length <= 0) {
            return [];
        }

        // console.log("=============== 퀵정렬 ===============");
        let left = [];
        let right = [];
        let pivot = arr[0];
        for (let i=1; i<arr.length; ++i) {
            // console.log(`pivot: ${pivot}, current element: ${arr[i]}`);
            if (arr[i] < pivot) {
                // console.log(`moving ${arr[i]} to the left`);
                left.push(arr[i]);
            } else {
                // console.log(`moving ${arr[i]} to the right`);
                right.push(arr[i]);
            }
        }
        return this.quickSort(left).concat(pivot, this.quickSort(right));
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
        return `[${this.dataStore.join(',')}];`
    }

    isValidSorting() {
        for (let i=0; i<this.dataStore.length-1; ++i) {
            if (i > i+1) {
                console.log('QuickSort Test Faild');
                break;
            }
        }
        console.log('QuickSort Test Passed!');
    }
}