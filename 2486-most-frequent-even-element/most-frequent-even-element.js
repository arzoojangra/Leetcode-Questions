/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    const evenMap = new Map(), n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] % 2 === 0) {
            evenMap.set(nums[i], (evenMap.get(nums[i]) ?? 0) + 1)
        }
    }

    let maxCount = 0;
    let ans = -1
    for (const [number, count] of evenMap) {
        if (count > maxCount || (count === maxCount && number < ans)) {
            ans = number;
            maxCount = count;
        }
    }
    return ans;
};