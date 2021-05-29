// https://www.youtube.com/watch?v=GSBLe8cKu0s


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
    
    peek() {
        return this.heap[0];
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



var getSkyline = function(buildings) {
    let separate_points = [];
    for (let i = 0; i < buildings.length; i++) {
        let [start, end, h] = buildings[i];
        separate_points.push([start, h, "s"],[end, h, "e"]);
    }
    
    separate_points.sort((a,b) => a[0] - b[0]);
    let heap = new MaxHeap();
    let output = [];
    heap.insert(0);
    filter(separate_points);
    
    for (let i = 0; i < separate_points.length; i++) {
        let heap_check = heap.peek();
        
        if (separate_points[i][2] === "s") {
            heap.insert(separate_points[i][1]);
            if (heap_check !== heap.peek()) {
                output.push([separate_points[i][0], separate_points[i][1]])
            }
        }
        if (separate_points[i][2] === "e") {
            heap.remove(separate_points[i][1]);
            if (heap_check !== heap.peek()) {
                output.push([separate_points[i][0], heap.peek()]);
            }
        }
    }
    
    return final_filter(output);
};

var filter = function(separate_points) {
    let i = 0;
    let counter_s = 0;
    let counter_e = 0;
    let counter_se = 0;
    let repeat = false;
    
    while (i < separate_points.length - 1) {
        if (separate_points[i][0] === separate_points[i + 1][0]) {
            if (separate_points[i][2] === "s" && separate_points[i + 1][2] === "s") {
                if (separate_points[i][1] < separate_points[i + 1][1]) {
                    swap(i, i + 1, separate_points);
                    counter_s++;
                }
            }
            if (separate_points[i][2] === "e" && separate_points[i + 1][2] === "e") {
                if (separate_points[i][1] > separate_points[i + 1][1]) {
                    swap(i, i + 1, separate_points);
                    counter_e++;
                }
            }
            if (separate_points[i][2] === "e" && separate_points[i + 1][2] === "s") {
                if (separate_points[i][1] < separate_points[i + 1][1]) {
                    swap(i, i + 1, separate_points);
                    counter_se++;
                }
                if (separate_points[i][1] === separate_points[i + 1][1]) {
                    separate_points.splice(i, 2);
                    repeat = true;
                    continue;
                }
            }
        }
        
        i++;
    }
    
    if (counter_s > 1 || counter_e > 1 || counter_se > 1 || repeat) {
        filter(separate_points);
    }
}

var swap = function(a,b,separate_points) {
    let temp = separate_points[a];
    separate_points[a] = separate_points[b];
    separate_points[b] = temp;
}

var final_filter = function(skyline) {
    let i = 0;
    
    while(i < skyline.length - 1) {
        if (skyline[i][0] === skyline[i + 1][0]) {
            if (skyline[i][1] < skyline[i + 1][1]) {
                skyline.splice(i, 1);
            } else {
                skyline.splice(i + 1, 1);
            }
            continue;
        }
        
        i++;
    }
    
    return skyline;
}