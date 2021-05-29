const Heap = require('./heap');

class Dijk {
  constructor() {
    this.heap = new Heap();
  }

  calculate(start_node) {
    start_node.min_distance = 0;

    this.heap.insert(start_node);

    while(this.heap.heap.length) {
      let current_node = this.heap.pop();

      if (!current_node.visited) {
        current_node.adjacency_list.forEach(edge => {
          let a = edge.start_node;
          let b = edge.end_node;
  
          let new_distance = a.min_distance + edge.weight;
  
          if (new_distance < b.min_distance) {
            b.parent = a;
            b.min_distance = new_distance;
            this.heap.insert(b);
          }
        }) 
      }

      current_node.visited = true;
    }
  }

  shortestPath(node) {
    console.log('Node: ', node.data, ' distance: ', node.min_distance);
    if (node.parent) {
      this.shortestPath(node.parent);
    }
  }
}

module.exports = Dijk;
