/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let n = nums.length, xor = 0;
    for (let i = 0; i < n; i++) {
        xor = xor ^ nums[i];
    }
    return xor;
};