/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    let mpp = new Map();
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let num = nums[i];
        let moreNeeded = target - num;
        if (mpp.has(moreNeeded)) {
            return [mpp.get(moreNeeded), i];
        }
        mpp.set(num, i);
    }
    return [-1, -1];
};