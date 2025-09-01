/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function countPartitions(a, maxSum) {
    let n = a.length;  // size of array
    let partitions = 1;
    let subarraySum = 0;
    for (let i = 0; i < n; i++) {
        if (subarraySum + a[i] <= maxSum) {
            // insert element to current subarray
            subarraySum += a[i];
        } else {
            // insert element to next subarray
            partitions++;
            subarraySum = a[i];
        }
    }
    return partitions;
}

var splitArray = function (a, k) {
    let low = Math.max(...a);
    let high = a.reduce((acc, curr) => acc + curr, 0);
    // Apply binary search
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let partitions = countPartitions(a, mid);
        if (partitions > k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
};