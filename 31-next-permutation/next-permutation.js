/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let n = nums.length;
    if (n <= 1) return;
    let idx = -1;
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            idx = i;
            break;
        }
    }
    if (idx == -1) {
        nums.reverse();
    } else {
        for (let i = n - 1; i >= 0; i--) {
            if (nums[i] > nums[idx]) {
                [nums[i], nums[idx]] = [nums[idx], nums[i]];
                break;
            }
        }
        let start = idx + 1;
        let end = n - 1;
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }
};