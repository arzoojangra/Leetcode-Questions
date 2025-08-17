/**
 * @param {number[]} nums
 * @return {number}
 */

var merge = function (nums, low, mid, high) {
    let temp = [];
    let left = low, right = mid + 1;
    while (left <= mid && right <= high) {
        if (nums[left] <= nums[right]) {
            temp.push(nums[left]);
            left++;
        } else {
            temp.push(nums[right]);
            right++;
        }
    }

    while (left <= mid) {
        temp.push(nums[left]);
        left++;
    }

    while (right <= high) {
        temp.push(nums[right]);
        right++;
    }

    for (let i = low; i <= high; i++) {
        nums[i] = temp[i-low];
    }
}

var countPairs = function (nums, low, mid, high) {
    let count = 0;
    let right = mid + 1;
    for (let i = low; i <= mid; i++) {
        while (right <= high && nums[i] > (2 * nums[right])) {
            right++;
        }
        count += (right - (mid + 1));
    }
    return count;
}

var mergeSort = function (nums, low, high) {
    let cnt = 0;
    if (low < high) {
        let mid = Math.floor((low + high) / 2);
        cnt += mergeSort(nums, low, mid);
        cnt += mergeSort(nums, mid + 1, high);
        cnt += countPairs(nums, low, mid, high);
        merge(nums, low, mid, high);
    }
    return cnt;
}

var reversePairs = function (nums) {
    return mergeSort(nums, 0, nums.length - 1);
};