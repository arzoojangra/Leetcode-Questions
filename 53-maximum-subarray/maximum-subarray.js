/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = nums[0], sum = 0, n = nums.length;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        maxSum = Math.max(maxSum, sum);
        if (sum < 0) sum = 0;
    }
    return maxSum;
};