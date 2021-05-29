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
    this.root = null;
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
}