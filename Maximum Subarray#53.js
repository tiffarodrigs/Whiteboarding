/*Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
  */
 /**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
  nums.indexOf(Math.max(...nums))
   nums.indexOf(Math.min(...nums))
          // Initialize our variables using the first element.
  let currentSubArray = nums[0];
  let maxSubArray = nums[0];
  
          // Start with the 2nd element since we already used the first one.
  for(let i=1;i<nums.length;i++){
      currentSubArray += nums[i]//-1,-2,2
                  // If current_subarray is negative, throw it away. //Otherwise, keep adding to it.
      currentSubArray = Math.max(nums[i],currentSubArray);//1,-2,4
      maxSubArray =Math.max(currentSubArray,maxSubArray);//1,1,4
  }
      
  return maxSubArray
};