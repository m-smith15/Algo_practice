// https://leetcode.com/problems/3sum/submissions/

// passes test cases, however submission runs into an error. Look to uncommented calls when picking this back up


var threeSum = function (nums) {
    // let arrLen = nums.length

    let result = []

    for (let x = 0; x < nums.length; x++) {
        // console.log("x is: " + nums[x])
        for (let y = 0; y < nums.length; y++) {
            if (nums[y] == nums[x]) {
                break;
            }
            // console.log("y is: " + nums[y])
            for (let z = 0; z < nums.length; z++) {
                if (nums[z] == nums[x] || nums[z] == nums[y]) {
                    break;
                }
                // console.log("z is: " + nums[z])
                // if(result.includes([nums[x]] && [nums[y]] && [nums[z]])){
                //     break;
                if (nums[x] + nums[y] + nums[z] === 0) {
                    temp = [nums[x], nums[y], nums[z]]
                    console.log("temp check: " + temp)
                    deDupe = 0;
                    for (let i = 0; i < result.length; i++) { //result
                        // console.log("result pos i: " + result[i])
                        for (let j = 0; j < temp.length; j++) { //temp
                            // console.log("temp pos j: " + temp[j])
                            if (result[i].includes(temp[j])) {
                                deDupe++;
                                break;
                            }
                            // console.log("dedupe for " + result[i] + ": " + deDupe)
                        }
                    }
                    console.log("dedupe before if check: " + deDupe)
                    if (deDupe >= 3) {
                        break;
                    } else {
                        result.push(temp)
                        console.log(result)
                    }
                }
            }
        }
    }
    // console.log("result: " + result)
    return result;
};

// let nums = [-1, 0, 1, 2, -1, -4]
// console.log(threeSum(nums))

nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]
console.log(threeSum(nums))
// Output: [[-1,-1,2],[-1,0,1]]

// expected [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
//missing:  [[-4,1,3],[-3,-1,4],[-3,0,3],[-2,0,2]]

// nums = [0,1,1]
// console.log(threeSum(nums))
// // Output: []

// nums = [0,0,0]
// console.log(threeSum(nums))
// // Output: [[0,0,0]]