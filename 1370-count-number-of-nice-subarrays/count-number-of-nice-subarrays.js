/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var niceSubarray = function (nums, k) {
    let l = 0, r = 0, sum = 0, cnt = 0;
    while (r < nums.length) {
        sum += nums[r] % 2;
        while (sum > k) {
            sum -= nums[l] % 2;
            l++;
        }
        cnt += (r - l + 1);
        r++;
    }
    return cnt;
}

var numberOfSubarrays = function (nums, k) {
    let result1 = niceSubarray(nums, k);
    let result2 = 0;
    if (k > 0) {
        result2 += niceSubarray(nums, k - 1);
    }
    return result1 - result2;
};