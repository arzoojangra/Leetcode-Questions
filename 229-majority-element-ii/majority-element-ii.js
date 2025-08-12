/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let cnt1 = 0, cnt2 = 0, ele1, ele2, n = nums.length;
    for (let i = 0; i < n; i++) {
        if (cnt1 === 0 && nums[i] !== ele2) {
            cnt1 = 1;
            ele1 = nums[i];
        } else if (cnt2 === 0 && nums[i] !== ele1) {
            cnt2 = 1;
            ele2 = nums[i];
        } else if (ele1 === nums[i]) {
            cnt1++;
        }
        else if (ele2 === nums[i]) {
            cnt2++;
        }
        else {
            cnt1--;
            cnt2--;
        }
    }

    let ans = [];
    cnt1 = 0; cnt2 = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === ele1)
            cnt1++;
        else if (nums[i] === ele2)
            cnt2++;
    }

    let mini = Math.floor(n / 3) + 1;
    if (cnt1 >= mini) {
        ans.push(ele1);
    }
    if (cnt2 >= mini) {
        ans.push(ele2);
    }
    return ans;
};