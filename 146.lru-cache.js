class LRUCache
{
    constructor(capacity){
        this.maxlen = capacity;
        this.map = new Map();
        this.len=0;
        this.head = {next:null};
        this.tail = {prev:this.head};
        this.head.next = this.tail;
    }

    get(key){
        var node = this.map.get(key);
        if(!node) return -1;
        this.move(node);
        return node.val;
    }
    put(key, value) {
        var node = this.map.get(key);
        if (node) node.val =value;
        else{
            if (this.len === this.maxlen){
                var remove = this.tail.prev;
                this.tail.prev = remove.prev;
                this.tail.prev.next = this.tail;
                remove.prev = remove.next = null;
                this.map.delete(remove.key);
                this.len-=1;              
            }
            node = { val: value, key:key };
            this.map.set(key, node);
            this.len+=1;
        }
        this.move(node);  
    }
    move(node){
        if(node.prev === this.head) return;
        if(node.prev && node.next){
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
        node.next = this.head.next;
        node.next.prev = node;
        this.head.next = node;
        node.prev = this.head;
    }
}
// @lc code=end

