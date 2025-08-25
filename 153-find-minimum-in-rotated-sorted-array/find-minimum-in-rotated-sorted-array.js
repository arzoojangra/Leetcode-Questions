/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let n = nums.length;
    let low = 0, high = n - 1, ans = Infinity;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[low] <= nums[mid]) {
            ans = Math.min(ans, nums[low]);
            low = mid + 1;
        } else {
            ans = Math.min(ans, nums[mid]);
            high = mid - 1;
        }
    }
    return ans;
};