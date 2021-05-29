// beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// find number of transformations
// One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

//create a graph from words if they differ by one letter and find shortest path

// to optimize: start 2 BFS searches from end node and start node

class Node {
    constructor(value) {
        this.value = value;
        this.list = [];
        this.visited = false;
        this.count = null;
        this.startOrigin = false;
        this.endOrigin = false
    }
    
    addEdge(node) {
        this.list.push(node);
    }
}

var ladderLength = function(beginWord, endWord, wordList) {
    wordList.push(beginWord);
    let endWordIndex = -1;
    
    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i] === endWord) {
            endWordIndex = i;
        }
    }
    
    if (endWordIndex === -1) {
        return 0;
    }
    
    for (let i = 0; i < wordList.length; i++) {
        wordList[i] = new Node(wordList[i]);
    }
    
    for (let i = 0; i < wordList.length; i++) {
        for (let i2 = i+1; i2 < wordList.length; i2++) {
            if (differOne(wordList[i].value, wordList[i2].value)) {
                wordList[i].addEdge(wordList[i2]);
                wordList[i2].addEdge(wordList[i]);
            }
        }
    }
    
    return BFS(wordList[wordList.length - 1], wordList[endWordIndex]);
};

var BFS = function(start, end) {
    let q = [];
    start.visited = true;
    start.count = 1;
    start.startOrigin = true;
    q.push(start);
    
    end.visited = true;
    end.count = 1;
    end.endOrigin = true;
    q.push(end);
    
    while (q.length) {
        let next = q.shift();
        
        for (let i = 0; i < next.list.length; i++) {
            
            if ((next.startOrigin && next.list[i].endOrigin) || (next.endOrigin && next.list[i].startOrigin)) {
                    return next.count + next.list[i].count;
                }
            
            if (!next.list[i].visited) {
                
                next.list[i].count = next.count + 1;
                next.list[i].visited = true;
                
                if (next.startOrigin) {
                    next.list[i].startOrigin = true;
                }
                if (next.endOrigin) {
                    next.list[i].endOrigin = true;
                }
                
                q.push(next.list[i]);
            }
        }
    }
    
    return 0;
}

var differOne = function(str1, str2) {   
    let count = 0;
    
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            count++;
        }
        if (count > 1) {
            return false;
        }
    }
    
    return count === 1;
}