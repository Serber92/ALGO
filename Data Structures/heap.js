
class Heap {
  constructor() {
    this.heap = [];
  }

  getHeap() {
    return this.heap;
  }

  insert(data) {
    this.heap.push(data);
    this.bubble_up();
  }

  pop() {
    let t = this.heap[0];
    this.heap[0] = this.heap[this.heap.length-1];
    this.heap.pop();
    if (this.heap.length) {
      this.bubble_down();
    }
    return t;
  }

  bubble_down(position = 0) {
    let child1 = position * 2 + 1;
    let child2 = position * 2 + 2;
    let min_index;

    if (this.heap[child1] && this.heap[child2]) {
      if (this.heap[child1].min_distance < this.heap[child2].min_distance) {
        min_index = child1;
      } else {
        min_index = child2;
      }
    }
    if (this.heap[child1] && !this.heap[child2]) {
      min_index = child1;
    }
    if (!this.heap[child1] && this.heap[child2]) {
      min_index = child2;
    }

    if (min_index) {
      if (this.heap[position].min_distance > this.heap[min_index].min_distance) {
        this.swap(position, min_index);
        this.bubble_down(min_index);
      }
    }
  }

  bubble_up(position = this.heap.length - 1) {
    let parent = Math.floor(Math.abs(position - 1)/2);
    if(this.heap[parent].min_distance > this.heap[position].min_distance) {
      this.swap(position, parent);
      this.bubble_up(parent)
    }
  }

  swap(a, b) {
    let t = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = t;
  }

  print(position = 0, level = 0) {
    let child1 = position * 2 + 1;
    let child2 = position * 2 + 2;

    if (this.heap[child1]) {
      this.print(child1, level + 5);
    }
    console.log(" ".repeat(level), this.heap[position]);
    if (this.heap[child2]) {
      this.print(child2, level + 5);
    }
  }
  
  static checkMinHeap(arr) {
    let items_num = arr.length/2;

    for (let i = 0; i < items_num; i++) {
      let child1 = i * 2 + 1;
      let child2 = i * 2 + 2;

      if (arr[i] > arr[child1] || arr[i] > arr[child2]) {
        return false;
      }
    }

    return true;

  }
}


module.exports = Heap;

