class ShellSort {
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

    // 동적 갭 시퀀스 계
    dynamicGapCreator() {
        const n = this.dataStore.length;
        let h = 1;

        let gaps = [];
        while (h < n/3) {
            h = 3 * h + 1;
        }

        while (h >= 1) {
            h = (h-1)/3;
            if(h != 0) gaps.push(h);
        }
        // console.log(`gaps: ${gaps.join(",")}`);
        return gaps;
    }

    shellSort() {
        console.log("=============== 셸정렬 ===============");
        let gaps = this.dynamicGapCreator();
        let gap;
        let loopCnt = 1;

        for (let g=0, end=gaps.length; g<end; ++g) {
            gap = gaps[g];

            // 삽입정렬과 같은 방식으로 동작한다.
            // 단 gap 만큼 인덱스 증가
            for (let i=gap; i<this.dataStore.length; ++i) {
                let temp = this.dataStore[i];
                let j;

                for (j=i; j>= gap && this.dataStore[j-gap] > temp; j -= gap) {
                    this.dataStore[j] = this.dataStore[j - gap];
                }
                this.dataStore[j] = temp;
                // console.log(`${loopCnt}회전: ${this.dataStore.toString()}`);
                loopCnt++;
            }
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
        return `[${this.dataStore.join(',')}];`
    }

    isValidSorting() {
        for (let i=0; i<this.dataStore.length-1; ++i) {
            if (i > i+1) {
                console.log('ShellSort Test Faild');
                break;
            }
        }
        console.log('ShellSort Test Passed!');
    }
}