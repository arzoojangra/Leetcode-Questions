/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var firstPosition = function (nums, target) {
    let low = 0, high = nums.length - 1, ans = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            ans = mid;
            high = mid - 1;
        }
        else if (nums[mid] > target) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return ans;
}

var lastPosition = function (nums, target) {
    let low = 0, high = nums.length - 1, ans = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            ans = mid;
            low = mid + 1;
        }
        else if (nums[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return ans;
}

var searchRange = function (nums, target) {
    let firstOccurrence = firstPosition(nums, target);
    let lastOccurrence = lastPosition(nums, target);
    return [firstOccurrence, lastOccurrence];
};