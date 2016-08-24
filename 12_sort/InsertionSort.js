class InsertionSort {
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

    insertionSort() {
        let arrayLength = this.dataStore.length;
        let temp;
        let inner;

        console.log("=============== 삽입정렬 ===============");
        for (let outer=1; outer <= arrayLength; ++outer) {
            temp = this.dataStore[outer];
            inner = outer;
            while (inner > 0 && this.dataStore[inner-1] > temp) {
                // 삽입정렬  특성상 왼쪽의  데이터는 모두 정렬이 되어 있음
                // 따라서, 바로 왼쪽의 데이터가 '선택' 값보다 크지 않다면 더이상 비교가 무의미
                
                // 한칸 오른쪽으로 밀어 temp 값이 들어갈 공간을 만듬.
                this.dataStore[inner] = this.dataStore[inner-1];
                --inner;
            }
            this.dataStore[inner] = temp;
            //console.log(outer + "회전: " + this.dataStore.toString());
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