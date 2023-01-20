/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start

class Trie {
    constructor(){
        this.head = {};
    }

    insert(word){
        var head = this.head;
        
        for(var c of word)
        {
            var node = head[c];
            if(node === undefined)
               head[c]= node = { end: false};
            head = node;
        }
        head.end = true;
    }

    traverse(word){
        var head = this.head;
        for(var c of word)
        {
            if(!head[c]) return null;
            head = head[c];
        }
        return head;
    }

    search(word){
        var node = this.traverse(word);
        return !!node && node.end;
    }

    startsWith(prefix){
        var node = this.traverse(prefix);
        return !!node;
    }
};


