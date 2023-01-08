/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start

var MyQueue = function() {
    this.arr = []; 
    return this;
};

MyQueue.prototype.push = function(x)
{
    this.arr.push(x);
}

MyQueue.prototype.pop = function(){
   return this.arr.splice(0,1);
}

MyQueue.prototype.peek= function(){
    return this.arr[0];
};

MyQueue.prototype.empty = function(){
    return this.arr.length === 0;
}

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

