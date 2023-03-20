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

    insert (word) {
        const length = word.length;
        let char_index;
        node = this.root;
        
        for (let index = 0; index < length; index++) {
            char_index = word[index].charCodeAt(0) - 'a'.charCodeAt(0);
            if (node.children[char_index] == null) {
                node.children[char_index] = new TrieNode();
            }    
            node = node.children[char_index];
       }

       node.isEndOfWord = true;
    }

    delete () {

    }

    search () {

    }
}