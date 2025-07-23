/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let inv = 0, n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] > nums[i + 1])
            inv++;
    }
    if (!inv) return true;
    if (inv == 1 && nums[0] >= nums[n - 1]) return true;
    return false;
};