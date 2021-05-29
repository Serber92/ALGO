class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    remove(value) {
        let index = this.find(value);
        this.swap(index, this.heap.length - 1);
        this.heap.pop();
        this.bubbleDown(index);
    }
    
    pop() {
        let max = this.heap[0];
        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        this.bubbleDown();
        return max;
    }
    
    bubbleDown(index = 0) {
        let left_child = index*2 + 1; 
        let right_child = index*2 + 2;
        
        if (this.heap[left_child] && this.heap[right_child]) {
            if (this.heap[left_child] > this.heap[right_child]) {
                if (this.heap[left_child] > this.heap[index]) {
                    this.swap(left_child, index);
                    this.bubbleDown(left_child);
                }
            } else {
                if (this.heap[right_child] > this.heap[index]) {
                    this.swap(right_child, index);
                    this.bubbleDown(right_child);
                }
            }
        }
        if (this.heap[left_child] && !this.heap[right_child]) {
            if (this.heap[left_child] > this.heap[index]) {
                this.swap(left_child, index);
            }
        }
        if (!this.heap[left_child] && !this.heap[right_child]) {
            return;
        }
    }
    
    find(value) {
        for (let i = 0; i < this.heap.length; i++) {
            if (value === this.heap[i]) {
                return i;
            }
            if (i === this.heap.length - 1) {
                return -1;
            }
        }
    }
    
    bubbleUp(index = this.heap.length - 1) {
        if (index === 0) {
            return;
        }
        let parent = Math.floor((index - 1) / 2);
        if (this.heap[index] > this.heap[parent]) {
            this.swap(index, parent);
            this.bubbleUp(parent);
        }
    }
    
    swap(i1, i2) {
        let temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    }
}

let h = new MaxHeap();
h.insert(1);
h.insert(12);
h.insert(23);
h.insert(2);
h.insert(5);
h.insert(78);
h.insert(92);

h.remove(78);

console.log('HEAP', h.heap);