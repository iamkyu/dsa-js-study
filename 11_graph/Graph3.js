// 11장 셀프과제
// 1. 교재의 그래프구현, dfs, bfs, 최단경로탐색 -> ES6 클래스 문법으로 변경
// 2. 플로이드-워셜 알고리즘 구현중.... 멘탈 붕괴

class Graph {
    constructor(v) {
        this.vertices = v;
        this.edges = 0;
        this.adj = [];

        this.marked = [];
        this.edgeTo = [];

        this.init();
    }

    init() {
        for (let i=0; i<this.vertices; ++i) {
            this.adj[i] = [];
            this.marked[i] = false;
        }
    }

    addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    show() {
        let str = '';

        for (let i=0; i<this.vertices; ++i) {
            str += i + ' -> ';
            for (let j=0; j<this.vertices; ++j) {
                if (this.adj[i][j] != undefined) {
                    str += this.adj[i][j] + ' ';
                }
            }
            str += '\n';
        }
        console.log(str);
    }

    // 깊이우선탐색 (Depth First Search)
    dfs(v) {
        let self = this;
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

    // 너비 우선 탐색(Breadth First Search)
    bfs(v) {
        let self = this;
        let queue = [];
        this.marked[v] = true;
        queue.push(v);

        let front;
        while (queue.length > 0) {
            front = queue.shift();
            if (front != undefined) {
                console.log('Visited vertex: ' + front);
            }

            this.adj[front].forEach(function(w) {
                if (!self.marked[w]) {
                    self.edgeTo[w] = front;
                    self.marked[w] = true;
                    queue.push(w);
                }
            });
        }
    }

    // 최단 경로 탐색
    pathTo(v) {
        let source = 0;
        this.bfs(source);

        if (!this.marked[v]) {
            return undefined;
        }
        let path = [];
        for (let i=v; i!=source; i=this.edgeTo[i]) {
            path.push(i);
        }
        path.push(source);

        let pathStr = '';
        if (path.length > 0) {
            pathStr = path.reverse().join('-');
        }

        console.log(pathStr);
    }

    // 플로이드-워셜 알고리즘
    // https://librewiki.net/wiki/%EC%8B%9C%EB%A6%AC%EC%A6%88:%EC%88%98%ED%95%99%EC%9D%B8%EB%93%AF_%EA%B3%BC%ED%95%99%EC%95%84%EB%8B%8C_%EA%B3%B5%ED%95%99%EA%B0%99%EC%9D%80_%EC%BB%B4%ED%93%A8%ED%84%B0%EA%B3%BC%ED%95%99/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98_%EC%A4%91%EA%B8%89#.ED.94.8C.EB.A1.9C.EC.9D.B4.EB.93.9C-.EC.9B.8C.EC.85.9C.28Floyd-Warshall.29_.EC.95.8C.EA.B3.A0.EB.A6.AC.EC.A6.98
    doFloydWarshall(v) {
        let weightGraph = [];

        for (let i=0; i<v; ++i) {
            weightGraph[i] = [];
        }

        weightGraph = this.setDummyData(weightGraph);
        console.log('======= doFloydWarshall =======');
        for (let i=0; i<weightGraph.length; ++i) {
            console.log(weightGraph[i].join(','));
        }
        console.log('======= 그래프 더미 데이터 생성 완료 =======');

        let floyd = weightGraph;

        for (let k=0; k<v; ++k) {
            for (let i=0; i<v; ++i) {
                for (let j=0; j<v; ++j) {
                    if (floyd[i][j] > (floyd[i][k] + floyd[k][j])) {
                        floyd[i][j] = floyd[i][k] + floyd[k][j];
                    }
                }
            }
        }

        for (let i=0; i<floyd.length; ++i) {
            console.log(floyd[i].join(','));
        }

        let stack = [];
        stack.push(6);
        let str = '';

        let peek = stack.pop();
        console.log("peek: " + peek);
        console.log(floyd[0][peek]);
        while(!isNaN(floyd[0][peek])) {
            stack.push(floyd[0][peek]);
            peek = stack.pop();
        }

        console.log(stack);

        while (stack.length > 0) {
            str += stack.pop();
        }

        console.log('path: ' + stack);
    }

    // 플로이드-워셜 알고리즘 헬퍼 함수: 
    // 임의의 가중치 그래프 데이터를 생성
    setDummyData(graph) {
        let v = graph.length;
        let weight = [1, 2, 3, 4, 5, 6, 7, 8, 9, NaN];

        for (let i=0; i<v; ++i) {
            for (let j=0; j<v; ++j) {
                let idx = this.randomRange();
                graph[i][j] = weight[idx];
            }
        }

        return graph;
    }

    // 플로이드-워셜 알고리즘 헬퍼 함수: 
    // 0 ~ 10 사이의 수를 반환
    randomRange() {
        return Math.floor((Math.random() * (9 - 0 + 1)) + 0);
    }
}