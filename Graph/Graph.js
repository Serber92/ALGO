const Dijk = require('./Dijkstra');

class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.visited = false;
    this.adjacency_list = [];
    this.min_distance = Infinity;
  }
}

class Edge {
  constructor(weight, start_node, end_node) {
    this.weight = weight;
    this.start_node = start_node;
    this.end_node = end_node;
  }
}

let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');
let e = new Node('E');
let h = new Node('H');
let m = new Node('M');
let q = new Node('Q');

let edge1 = new Edge(5, a, b);
a.adjacency_list.push(edge1);
let edge2 = new Edge(5, b, c);
b.adjacency_list.push(edge2);
let edge3 = new Edge(5, c, d);
c.adjacency_list.push(edge3);
let edge4 = new Edge(5, d, e);
d.adjacency_list.push(edge4);
let edge5 = new Edge(5, e, h);
e.adjacency_list.push(edge5);
let edge6 = new Edge(5, h, m);
h.adjacency_list.push(edge6);
let edge7 = new Edge(5, m, a);
m.adjacency_list.push(edge7);
let edge8 = new Edge(1, m, q);
m.adjacency_list.push(edge8);
let edge9 = new Edge(1, a, q);
a.adjacency_list.push(edge9);
let edge10 = new Edge(1, q, d);
q.adjacency_list.push(edge10);

// let dijk = new Dijk();
// dijk.calculate(a);
// dijk.shortestPath(d);