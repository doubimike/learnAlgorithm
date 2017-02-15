function Vertex(label) {
    this.label = label;
}


function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
        // this.adj[i].push('');
    }
    this.addEdge = addEdge;
    this.toString = toString;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.marked = [];
    for (var i = 0; i < this.vertices; i++) {
        this.marked[i] = false;
    }
}


function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; i++) {
        process.stdout.write(i + '->')
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                process.stdout.write(this.adj[i][j] + ' ');
            }
        }
        process.stdout.write(' \n');
    }
}

function dfs(v) {
    var _this = this;
    this.marked[v] = true;
    if (this.adj[v] != undefined) {
        process.stdout.write('Vistited vertex: ' + v + '\n');
        this.adj[v].forEach(function (item) {
            process.stdout.write('---Vistited item: ' + item + '\n');
            if (!_this.marked[item]) {
                _this.dfs(item);
            }
        });
    }
}

g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.dfs(0);
