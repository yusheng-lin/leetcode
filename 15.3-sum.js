/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const results = [];
    if (nums.length < 3) return results;
    nums = nums.sort((a,b) => a>b? 1:-1);
    if(nums[0] > 0) return results;
    
    for(var i=0; i< nums.length;i++)
    {
        var num = nums[i];
        
        if (num > 0) break;
        if (i > 0 && num === nums[i-1]) continue; //prevent duplicate
        var from = i+1 , to = nums.length-1;
        
        while(from < to)
        {
            var small = nums[from], large = nums[to];
            var sum = num + small + large;

            if (sum > 0) to--;
            else if (sum < 0) from++;
            else 
            {
                results.push([num, small, large]);

                while(from < to && small === nums[from])
                    from++;
                while(from < to && large === nums[to])
                    to--;   
            }
        }
    }
    return results;
};
// @lc code=end

