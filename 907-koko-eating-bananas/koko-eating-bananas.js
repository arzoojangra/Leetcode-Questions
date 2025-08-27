/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var maxBananas = function (piles) {
    let max = piles[0];
    for (const pile of piles) {
        max = Math.max(max, pile);
    }
    return max;
}

var totalHours = function (piles, hourly) {
    let total = 0;
    for (const pile of piles) {
        total += Math.ceil(pile / hourly);
    }
    return total;
}

var minEatingSpeed = function (piles, h) {
    let low = 1, high = maxBananas(piles);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let totalTime = totalHours(piles, mid);
        if (totalTime <= h) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};