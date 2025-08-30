/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

function findDays(weights, cap) {
    let days = 1; // First day.
    let load = 0;
    let n = weights.length; // size of array.
    for (let i = 0; i < n; i++) {
        if (load + weights[i] > cap) {
            days += 1; // move to next day.
            load = weights[i]; // load the weight.
        } else {
            load += weights[i];
        }
    }
    return days;
}

var shipWithinDays = function (weights, days) {
    let low = Math.max(...weights);
    let high = weights.reduce((sum, weight) => sum + weight, 0);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let numberOfDays = findDays(weights, mid);
        if (numberOfDays <= days) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};