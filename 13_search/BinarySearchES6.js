class Search {
    constructor () {
        this.dataStore = [];
    }

    init(number) {
        this.dataStore = new Array(number)
                            .fill().map((v, i) => i + 1)
                            .sort(function(a,b) {return Math.random()-0.5});
    }

    seqSearch(data) {
        for (let i=0, end=this.dataStore.length; i<end; ++i) {
            if (this.dataStore[i] == data) {
                // this.print(i);
                return;
            }
        }
        console.log("not found");
    }

    binSearch(data) {
        // 이진탐색 전 삽입정렬 수행
        this.insertionSort();

        let lowerBound = 0;
        let upperBound = this.dataStore.length - 1;
        let mid = 0;

        while (lowerBound <= upperBound) {
            mid = Math.floor((lowerBound + upperBound) / 2);
            
            if (this.dataStore[mid] < data) {
                lowerBound = mid + 1;
            } else if (this.dataStore[mid] > data) {
                upperBound = mid - 1;
            } else {
                // this.print(mid);
                return;
            }
        }
        // return -1;
        console.log("not found");
    }

    insertionSort() {
        let temp;
        let inner;

        // console.log("=============== 삽입정렬 수행");
        for (let outer=1, end=this.dataStore.length; outer < end; ++outer) {
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

    print(hitIndex) {
        let str = "";

        for (let i=0, end=this.dataStore.length; i<end; ++i) {
            if (i != hitIndex) {
                str += `${this.dataStore[i]},`;
            } else {
                str += `[${this.dataStore[i]}],`;
            }
        }
        str = str.slice(0, -1);
        console.log(str);
    }
}