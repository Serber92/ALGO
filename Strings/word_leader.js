// beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// find number of transformations
// One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

//create a graph from words if they differ by one letter and find shortest path

class Node {
    constructor(value) {
        this.value = value;
        this.list = [];
        this.visited = false;
        this.count = null;
    }
    
    addEdge(node) {
        this.list.push(node);
    }
}

var ladderLength = function(beginWord, endWord, wordList) {
    wordList.push(beginWord);
    
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
    
    return BFS(wordList[wordList.length - 1], endWord);
};

var BFS = function(start, endNodeValue) {
    let q = [];
    start.visited = true;
    start.count = 1;
    q.push(start);
    
    while (q.length) {
        let next = q.shift();
        
        if (next.value === endNodeValue) {
            return next.count;
        }
        
        for (let i = 0; i < next.list.length; i++) {
            if (!next.list[i].visited) {
                next.list[i].count = next.count + 1;
                next.list[i].visited = true;
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