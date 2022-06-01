/*Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 */

var containsDuplicate = function(nums) {
   /*with array
   const resultArr=[];
   let result = false;
  nums.forEach(element =>{
      if (resultArr.includes(element)){
          result = true;
      }
      else
      resultArr.push(element)
  })
   return result;
   */
  
  /* with set
  const mySet1 = new Set();
   let result = false;
   nums.forEach(element =>{
       if (mySet1.has(element)){
          result = true;
       }
       else
           mySet1.add(element)
   })
               return result;
   */
   const acc = [];
   return !nums.every((num) => {
       if(!acc.includes(num)){
           acc.push(num);
           return true;
       } else {
           return false;
       }
   })
           
};