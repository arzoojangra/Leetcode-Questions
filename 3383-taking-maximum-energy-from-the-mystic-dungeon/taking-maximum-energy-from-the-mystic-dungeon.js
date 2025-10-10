/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function (energy, k) {
    const n = energy.length;
    const dp = energy.slice();
    for (let i = n - 1 - k; i >= 0; i--) {
        dp[i] += dp[i + k];
    }
    return Math.max(...dp);
};