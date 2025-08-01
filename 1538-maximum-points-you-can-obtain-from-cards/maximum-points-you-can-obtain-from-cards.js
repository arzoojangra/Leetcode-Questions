/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    let lsum = 0, rsum = 0, maxSum = 0;
    for (let i = 0; i < k; i++) {
        lsum += cardPoints[i];
        maxSum = Math.max(maxSum, lsum);
    }
    let rindex = cardPoints.length - 1;
    for (let i = k - 1; i >= 0; i--) {
        lsum = lsum - cardPoints[i];
        rsum += cardPoints[rindex];
        rindex--;
        maxSum = Math.max(maxSum, rsum + lsum);
    }
    return maxSum;
};