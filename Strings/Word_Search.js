// Tries 
// on backtrack from dead end remove visited
// on word complete in Trie remove single branch

class Node {
  constructor(letter) {
    this.letter = letter;
    this.parent = null;
    this.end = false;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node(null);
  }
    
    return_root() {
        return this.root;
    }

  insert(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        node.children[word[i]] = new Node(word[i]);
        node.children[word[i]].parent = node;
      }

      node = node.children[word[i]];

      if (i === word.length - 1) {
        node.end = true;
      }
    }
  }
    
    return_word(node) {
        let word = "";
        
        while(node.parent.letter !== null) {
            word = node.letter + word;
            node = node.parent;
        }
        
        return node.letter + word;
    }
    
    remove_branch(node) {
        if (node.parent.end || node.parent.letter === null || (Object.keys(node.parent.children)).length) {
            delete node.parent.children[node.letter];
            return;
        }
        this.remove_branch(node.parent);
    }
}

var findWords = function(board, words) {
    
    let result = [];
    
     let start_word_search = (row, col, board, node, trie, visited = {}) => {
        if (node.children[board[row][col]]) {
            
            visited[row + "," + col] = true;
            
            node = node.children[board[row][col]];
            if (node.end) {
                result.push(trie.return_word(node));
                node.end = false;
                
                if (!(Object.keys(node.children)).length) {
                    trie.remove_branch(node);
                }
            }
            if (board[row]) {
                if (!visited[row + "," + (col + 1)]) {
                    start_word_search(row, col + 1, board, node, trie, visited);
                }
                if (!visited[row + "," + (col - 1)]) {
                    start_word_search(row, col - 1, board, node, trie, visited);
                }  
            }
            if (board[row - 1]) {
                if (!visited[(row - 1) + "," + col]) {
                    start_word_search(row - 1, col, board, node, trie, visited);
                }
            }
            if (board[row + 1]) {
                if (!visited[(row + 1) + "," + col]) {
                    start_word_search(row + 1, col, board, node, trie, visited);
                }
            }
            
            visited[row + "," + col] = false;
        }
    }
     
    
    let trie = new Trie();
    for (let i = 0; i < words.length; i++) {
        trie.insert(words[i]);
    };
    
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            start_word_search(row, col, board, trie.return_root(), trie);
        }
    }
    
    return result;
};