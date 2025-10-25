/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let ans = 0;
    let monday = 1;
    while (n > 0) {
        for (let day = 0; day < Math.min(n, 7); day++) {
            ans += monday + day;
        }
        n -= 7;
        monday++;
    }
    return ans;
};