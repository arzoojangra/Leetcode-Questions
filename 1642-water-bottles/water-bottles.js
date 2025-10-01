/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let ans = numBottles;
    let emptyBottles = numBottles;
    while (emptyBottles >= numExchange) {
        let newBottles = Math.floor(emptyBottles / numExchange);
        ans += newBottles;
        emptyBottles = emptyBottles % numExchange;
        emptyBottles += newBottles;
    }
    return ans;
};