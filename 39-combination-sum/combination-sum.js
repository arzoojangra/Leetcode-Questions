/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var findCombination = function (idx, target, arr, ans, ds) {
    if (idx === arr.length) {
        if (target === 0) {
            let vals = ds.slice();
            ans.push(vals);
        }
        return;
    }

    if (arr[idx] <= target) {
        ds.push(arr[idx]);
        findCombination(idx, target - arr[idx], arr, ans, ds);
        ds.pop();
    }
    findCombination(idx + 1, target, arr, ans, ds);
};

var combinationSum = function (candidates, target) {
    let ans = [];
    let ds = [];
    findCombination(0, target, candidates, ans, ds);
    return ans;
};