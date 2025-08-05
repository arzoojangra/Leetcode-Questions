/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var goodSubarrays = function (nums, k) {
    let l = 0, r = 0, count = 0;
    const mpp = new Map();
    while (r < nums.length) {
        mpp.set(nums[r], (mpp.get(nums[r]) || 0) + 1);
        while (mpp.size > k) {
            mpp.set(nums[l], mpp.get(nums[l]) - 1);
            if (!mpp.get(nums[l]))
                mpp.delete(nums[l]);
            l++;
        }
        count += r - l + 1;
        r++;
    }
    return count;
}

var subarraysWithKDistinct = function (nums, k) {
    let result1 = goodSubarrays(nums, k);
    let result2 = 0;
    if (k > 0) {
        result2 += goodSubarrays(nums, k - 1);
    }
    return result1 - result2;
};