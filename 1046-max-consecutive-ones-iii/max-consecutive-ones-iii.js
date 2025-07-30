/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let left = 0, right = 0, zeroes = 0, maxLen = 0;
    let n = nums.length;
    if (n == 0) return 0;
    while (right < n) {
        if (nums[right] == 0) zeroes++;
        if (zeroes > k) {
            if (nums[left] == 0) zeroes--;
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
        right++;
    }
    return maxLen;
};