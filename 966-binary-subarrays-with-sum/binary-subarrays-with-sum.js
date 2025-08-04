/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */

var numSubarraysWithSum = function (nums, goal) {
    let result1 = subArraysWithSum(nums, goal);
    let result2 = 0;
    if (goal > 0) {
        result2 += subArraysWithSum(nums, goal - 1);
    }
    return result1 - result2;
};

var subArraysWithSum = function (nums, goal) {
    let l = 0, r = 0, sum = 0, cnt = 0, n = nums.length;
    while (r < n) {
        sum += nums[r];
        while (sum > goal) {
            sum -= nums[l];
            l++;
        }
        cnt += (r - l + 1);
        r++;
    }
    return cnt;
}