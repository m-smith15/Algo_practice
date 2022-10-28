/* https://leetcode.com/problems/running-sum-of-1d-array/?envType=study-plan&id=level-1
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
*/

var runningSum = function(nums) {
    let result = [];
    let temp = 0;
    for(let x = 0; x < nums.length; x++){
        temp += nums[x]
        result.push(temp)
    }
    return result;
};

// let nums = [1,2,3,4]
// console.log(runningSum(nums))
// //Output: [1,3,6,10]

/* https://leetcode.com/problems/find-pivot-index/?envType=study-plan&id=level-1

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

*/