/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
    let n = arr.length;
    let count = 0;
    let freq = new Map();

    for (let k = n - 1; k >= 2; k--) {
        freq.set(arr[k], (freq.get(arr[k]) || 0) + 1);

        let j = k - 1;
        for (let i = 0; i < j; i++) {
            if (Math.abs(arr[i] - arr[j]) <= a) {
                for (let [val, f] of freq) {
                    if (Math.abs(arr[j] - val) <= b && Math.abs(arr[i] - val) <= c) {
                        count += f;
                    }
                }
            }
        }
    }
    return count;
};