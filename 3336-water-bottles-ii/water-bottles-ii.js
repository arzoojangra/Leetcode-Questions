/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function (numBottles, numExchange) {
    let ans = numBottles;
    let emptyBottles = numBottles;
    while (emptyBottles >= numExchange) {
        emptyBottles -= numExchange;
        ans += 1;
        emptyBottles += 1;
        numExchange += 1;
    }
    return ans;
};