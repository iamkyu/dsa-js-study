class Graph {
    constructor() {
        this.vertices = [];
        this.adjList = {};
    }

    addVertex(v) {
        this.vertices.push(v);
        this.adjList[v] = [];
    }

    addEdge(v, w) {
        this.adjList[v].push(w);
        this.adjList[w].push(v);
    }

    show() {
        let s ='';
        for (var i=0; i<this.vertices.length; ++i) {
            s += this.vertices[i] + ' -> ';
            let neighbors = this.adjList[this.vertices[i]];
            for (var j=0; j<neighbors.length; ++j) {
                s += neighbors[j] + ' ';
            }
            s += '\n'
        }
        return s;
    }

    initializeColor () {
        let colors = [];
        for (let i=0, end=this.vertices.length; i<end; ++i) {
            colors[this.vertices[i]] = "white";
        }
        return colors;
    }

    bfs (v, callback) {
        let colors =  this.initializeColor();
        let queue = [];
        queue.push(v);

        while (queue.length >= 0) {
            let u = queue.shift();
            let neighbors = this.adjList[u];
            colors[u] = "grey";

            //TODO: 체크 방법 개선
            if (neighbors == undefined) return;

            for (var i=0; i<neighbors.length; ++i) {
                let w = neighbors[i];
                if (colors[w] === "white") {
                    colors[w] = "grey";
                    queue.push(w);
                }
            }
            colors[u] = "black";
            if (callback) {
                callback(u);
            }
        }
    }
}