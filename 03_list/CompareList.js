class List {
    constructor() {
        this.dataStore = [];
    }

    add(data) {
        this.dataStore.push(data);
    }

    addMaxVal(data) {
        let isBiggest = true;

        if (typeof data === 'number' || typeof data === 'string') {
            for (let i=0, end=this.dataStore.length; i<end; ++i)
                if (this.dataStore[i] > data) {
                    isBiggest = false;
                    break;
                }

        } else {
            console.log("Not valid data type");
            return false;
        }

        if(isBiggest) this.add(data);
    }

    addMinVal(data) {
        let isSmallest = true;

        if (typeof data === 'number' || typeof data === 'string') {
            for (let i=0, end=this.dataStore.length; i<end; ++i)
                if (data > this.dataStore[i]) {
                    isSmallest = false;
                    break;
                }

        } else {
            console.log("Not valid data type");
            return false;
        }

        if(isSmallest) this.add(data);
    }

}