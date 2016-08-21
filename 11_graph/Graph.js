// function Vertext(label) {
//     this.label = label;
// }

function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    this.marked = [];
    this.edgeTo = [];

    for (var i=0; i<this.vertices; ++i) {
        this.adj[i] = [];
        this.marked[i] = false;
    }

    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    var str = '';

    console.log(this.adj);

    for (var i=0; i<this.vertices; ++i) {
        str += i + ' - > ';
        for (var j=0; j<this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                str += this.adj[i][j] + ' ';
            }
        }
        str += '\n';
  }
  console.log(str);
}

function dfs(v) {
    var self = this;
    this.marked[v] = true;
    if (this.adj[v] != undefined) {
        console.log('Visited vertex: ' + v);
    }

    this.adj[v].forEach(function(w) {
        if (!self.marked[w]) {
            self.dfs(w);
        }
    });
}

function bfs(s) {
    var self = this;
    var queue = [];
    this.marked[s] = true;
    queue.push(s);

    while(queue.length > 0) {
        var v = queue.shift();
        if(v != undefined) {
            console.log('Visited vertex: ' + v);
        }

        this.adj[v].forEach(function(w) {
            if(!self.marked[w]) {
                self.edgeTo[w] = v;
                self.marked[w] = true;
                queue.push(w);
            }
        });
    }
}