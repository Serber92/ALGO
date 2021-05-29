// You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.
// Return the number of connected components in the graph.


// DFS solution
// Create an adjacency list such that adj[v] contains all the adjacent vertices of vertex v.
// Initialize a hashmap or array, visited, to track the visited vertices.
// Define a counter variable and initialize it to zero.
// Iterate over each vertex in edges, and if the vertex is not already in visited, start a DFS from it. Add every vertex visited during the DFS to visited.
// Every time a new DFS starts, increment the counter variable by one.
// At the end, the counter variable will contain the number of connected components in the undirected graph.
var countComponents = function(n, edges) {
    let hash = {};
    let visited = {};
    
    var addEdge = function(a, b) {
        if (hash[a] === undefined) {
            hash[a] = [b]
        } else {
            hash[a].push(b);
        }
        
        if (hash[b] === undefined) {
            hash[b] = [a]
        } else {
            hash[b].push(a);
        }
    }
    
    let count = 0;
    let q;
    
    var DFS = function() {
        let next = q.shift();
        
        if (hash[next] !== undefined && !visited[next]) {
            visited[next] = true;
            q = [...q, ...hash[next]];
        }
        
        if (!q.length) {
            count++;
            return;
        } else {
            DFS();
        }
    }
    
    for (let i = 0; i < n; i++) {
        visited[i] = false;
    }
    
    for (let i = 0; i < edges.length; i++) {
        addEdge(edges[i][0], edges[i][1]);
    };
    
    
    
    for (let key in visited) {
        if (visited[key] === false && hash[key] !== undefined) {
            q = [...hash[key]];
            DFS();
        }
        if (visited[key] === false && hash[key] === undefined) {
            count++;
        }
    }
    
    return count;
};

// using sets
// Initialize a variable count with the number of vertices in the input.
// Traverse all of the edges one by one, performing the union-find method combine on each edge. If the endpoints are already in the same set, then keep traversing. If they are not, then decrement count by 1.
// After traversing all of the edges, the variable count will contain the number of components in the graph.
var countComponents = function(n, edges) {
    let count = n;
    let sets = [];
    
    for (let i = 0; i < n; i++) {
        sets.push([i]);
    }
    
    for (let i = 0; i < edges.length; i++) {
        let set0 = -1;
        let set1 = -1;
        
        for (let i2 = 0; i2 < sets.length; i2++) {
            if (sets[i2].includes(edges[i][0])) {
                set0 = i2;
            }
            if (sets[i2].includes(edges[i][1])) {
                set1 = i2;
            }
            if (set0 !== -1 && set1 !== -1) {
                break;
            }
        }
        
        if (set0 !== set1) {
            joinArrs(set0, set1, sets);
            count--;
        }
    }
    
    return count;
};

var joinArrs = function(a,b, arr) {
    arr[a] = arr[a].concat(arr[b]);
    arr.splice(b,1);
}