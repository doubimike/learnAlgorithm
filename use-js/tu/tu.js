function Vertex(label) {
    this.label = label;
}


function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    this.edgeTo = [];
    for (var i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
        // this.adj[i].push('');
    }
    this.addEdge = addEdge;
    this.toString = toString;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
    this.marked = [];
    for (var i = 0; i < this.vertices; i++) {
        this.marked[i] = false;
    }
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
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

function bfs(s) {
    var queue = [];
    var _this = this;
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
        var v = queue.shift();
        if (v !== undefined) {
            process.stdout.write('---Vistited vertex: ' + v + '\n');
        }
        this.adj[v].forEach(function (item) {
            if (!_this.marked[item]) {
                _this.marked[item] = true;
                _this.edgeTo[item] = v;
                queue.push(item);
            }
        });
    }
}

function pathTo(v) {
    var source = 0;
    console.log('1', v)
    console.log('1', this.hasPathTo(v))
    console.log('1', this.marked)
    console.log('1', this.edgeTo)

    if (!this.hasPathTo(v)) {
        return undefined;
    }

    var path = [];
    for (var i = v; i != source; i + this.edgeTo[i]) {
        path.push(i);
    }
    path.push(s);
    return path;


}

function hasPathTo(v) {
    return this.marked[v];
}
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
var vertex = 4;
var paths = g.pathTo(4);
// while (paths.length > 0) {
//     if (paths.length > 1) {
//         process.stdout.write(paths.pop() + '-');
//     } else {
//         process.stdout.write(paths.pop());
//     }
// }
