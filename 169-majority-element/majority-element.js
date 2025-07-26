/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let n = nums.length;
    let cnt = 0, ele;
    for (let i = 0; i < n; i++) {
        if (cnt == 0) {
            cnt = 1;
            ele = nums[i];
        }
        else if (ele == nums[i]) cnt++;
        else cnt--;
    }
    let cnt1 = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] == ele) cnt1++;
    }
    if (cnt1 > (n / 2)) return ele;
    return -1;
};