/* https://leetcode.com/problems/plus-one/

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
*/

var plusOne = (digits) => {

    let last = digits.length - 1

    if (digits[last] + 1 == 10) { // handling if need to "carry the 1"
        digits[last] = 0

        if (!digits[last - 1]) {
            digits.unshift(1)
            return digits;
        }
        if (digits[last - 1] + 1 > 9) {
            let x = digits[last - 1] + 1
            while (x > 9) {
                console.log("starting while")
                last--;
                digits[last] = 0
                x = digits[last - 1] + 1
                if (digits[last - 1] + 1 < 10) {
                    digits[last - 1] += 1
                }
                if (last == 0) {
                    console.log("unshifting")
                    digits[last] = 0
                    digits.unshift(1)
                    break;
                }
            }
        } else{
            digits[last - 1] += 1
        }
    }
    else {
        digits[last] += 1;
    }
    return digits
}

let digits = [1, 2, 3]
// console.log(plusOne(digits))
// Output: [1,2,4]

digits = [4, 3, 2, 1]
// console.log(plusOne(digits))
// Output: [4,3,2,2]

digits = [9]
// console.log(plusOne(digits))
digits = [9, 9]
// console.log(plusOne(digits))
// Output: [1, 0]

digits = [9, 9, 9]
// console.log(plusOne(digits))
digits = [8, 9, 9, 9]
// console.log(plusOne(digits))
digits = [9, 8, 9]
console.log(plusOne(digits))
// console.log(plusOne(digits))

digits = [5, 2, 2, 6, 5, 7, 1, 9, 0, 3, 8, 6, 8, 6, 5, 2, 1, 8, 7, 9, 8, 3, 8, 4, 7, 2, 5, 8, 9]

// JS moves the larger numbers to exponetial notation by default. So much for my idea of converting to a string, adding, then splitting back into an array!

// example = digits.join('')
// example2 = parseInt(example).toLocaleString('fullwide', {useGrouping:false})
// console.log(example2)

// temp = parseInt(digits.join(''))
// temp += 1;
// const new2 = Array.from(String(temp))
// console.log(new2)
// digits = new2.map(str => Number(str))