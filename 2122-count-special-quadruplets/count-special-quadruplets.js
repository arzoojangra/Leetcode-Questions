/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
    let n = nums.length;
    let count = 0;
    let sumMap = new Map();

    // Since nums[a] + nums[b] + nums[c] = nums[d]
    // We can write nums[a] + nums[b] = nums[d] - nums[c]
    // Store the RHS in map and find the LHS
    for (let c = n - 2; c >= 2; c--) {
        for (let d = c + 1; d < n; d++) {
            let diff = nums[d] - nums[c];
            sumMap.set(diff, (sumMap.get(diff) || 0) + 1);
        }

        let b = c - 1;
        for (let a = 0; a < b; a++) {
            let sum = nums[a] + nums[b];
            if (sumMap.has(sum)) {
                count += sumMap.get(sum);
            }
        }
    }
    return count;
};