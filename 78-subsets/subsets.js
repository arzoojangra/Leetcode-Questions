/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var backtrack = function (index, n, nums, current, ans) {
    if (index === n) {
        ans.push([...current]);
        return;
    }
    backtrack(index + 1, n, nums, current, ans);

    current.push(nums[index]);
    backtrack(index + 1, n, nums, current, ans);

    current.pop();
}

var subsets = function (nums) {
    const ans = [];
    const current = [];
    backtrack(0, nums.length, nums, current, ans);
    return ans;
};