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

var pivotIndex = function(nums) {
    runningLeft = 0;
    runningRight = 0;
    for(let x = 0; x < nums.length; x++){
        runningRight += nums[x]
    }

    for(let y = 0; y < nums.length; y++){

        if(runningLeft == (runningRight - nums[y])){
            return y;
        }
        else {
            runningLeft += nums[y]
            console.log("left: " + runningLeft)
            runningRight -= nums[y]
            console.log("right: " + runningRight)
        }
    }
    return -1;
};


let nums = [1,7,3,6,5,6]
console.log(pivotIndex(nums))
// Output: 3

/* https://leetcode.com/problems/isomorphic-strings/?envType=study-plan&id=level-1

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

*/ 

var isIsomorphic = function(s, t) {
    
};

let s = "egg", t = "add"
// Output: true

s = "foo", t = "bar"
// Output: false * because you can't replace the o's with a AND r, only one