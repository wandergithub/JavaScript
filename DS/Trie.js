class TrieNode {
  constructor() {
    this.children = Array(26).fill(null);

    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    const length = word.length;
    let char_index;
    let node = this.root;

    for (let index = 0; index < length; index++) {
      char_index = word[index].charCodeAt(0) - "a".charCodeAt(0);
      if (node.children[char_index] == null) {
        node.children[char_index] = new TrieNode();
      }
      node = node.children[char_index];
    }

    node.isEndOfWord = true;
  }

  delete() {
    return null;
  }

  search(word) {
    const length = word.length;
    let char_index;
    let node = this.root;

    for (let index = 0; index < length; index++) {
      char_index = word[index].charCodeAt(0) - "a".charCodeAt(0);

      if (node.children[char_index] == null) {
        return false;
      }

      node = node.children[char_index];
    }

    return node.isEndOfWord;
  }

  /* boolean startsWith(String prefix) Returns true if there is a previously 
        inserted string word that has the prefix prefix, and false otherwise.
    */
  startsWith(word) {
    const length = word.length;
    let char_index;
    let node = this.root;

    for (let index = 0; index < length; index++) {
      char_index = word[index].charCodeAt(0) - "a".charCodeAt(0);

      if (node.children[index] == null) {
        return false;
      }

      node = node.children[index];
    }

    return true;
  }
}
