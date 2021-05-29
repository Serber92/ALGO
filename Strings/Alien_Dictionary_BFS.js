

class Node {
    constructor(letter) {
        this.letter = letter;
        this.list = [];
        this.parents = 0;
    }
    
    addChild(node) {
        this.list.push(node);
    }
    
    addParent() {
        this.parents += 1;
    }
}

var alienOrder = function(words) {
    if (words.length === 1) {
        return words[0]
    }
    if (words.length === 0) {
        return "";
    }
    
    let graph = {};
    let q = [];
    let output = "";
    let remaints = {};
    let ruleViolated = {check: false};
    
    for (let i = 0; i < words.length - 1; i++) {
        checkWords(words[i], words[i+1], graph, remaints, ruleViolated);
    }
    
    if (ruleViolated.check) {
        return "";
    }
    
    for (let key in graph) {
        if (graph[key].parents === 0) {
            q.push(graph[key])
        }
    }
    
    while(q.length) {
        let next = q.shift();
        output += next.letter;
        for (let i = 0; i < next.list.length; i++) {
            next.list[i].parents -= 1;
            if (!next.list[i].parents) {
                q.push(next.list[i]);
            }
        }
    }
    
    let graphLetter = Object.keys(graph);
    if (graphLetter.length > output.length) {
        return "";
    }
    
    let remainingLetters = Object.keys(remaints);
    for (let i = 0; i < remainingLetters.length; i++) {
        if (!graph[remainingLetters[i]]) {
            output += remainingLetters[i];
        }
    }
    
    return output;
};

var checkWords = function(word1, word2, graph, remaints, ruleViolated) {
    let length = Math.min(word1.length, word2.length);
    
    for (let i = 0; i < length; i++) {
        
        if (!graph[word1[i]]) {
                graph[word1[i]] = new Node(word1[i]);
            }
        if (!graph[word2[i]]) {
            graph[word2[i]] = new Node(word2[i]);
        }
        
        if (word1[i] !== word2[i]) {
            graph[word1[i]].addChild(graph[word2[i]]);
            graph[word2[i]].addParent();
            
            for (let i2 = i; i2 < word1.length; i2++) {
                remaints[word1[i2]] = true;
            }
            for (let i2 = i; i2 < word2.length; i2++) {
                remaints[word2[i2]] = true;
            }
            
            break;
        } else {
            if (i === length - 1) {
                if (word1.length > word2.length) {
                    ruleViolated.check = true;
                }
                
                for (let i2 = i; i2 < word1.length; i2++) {
                    remaints[word1[i2]] = true;
                }
                for (let i2 = i; i2 < word2.length; i2++) {
                    remaints[word2[i2]] = true;
                }
            }
        }
    }
}