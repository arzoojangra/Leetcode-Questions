/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
function lowerBound(arr, target) {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (arr[mid] >= target) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};

var successfulPairs = function (spells, potions, success) {
    potions.sort((a, b) => a - b);
    const m = potions.length;
    const ans = new Array(spells.length);

    for (let i = 0; i < spells.length; i++) {
        const spell = spells[i];
        if (spell === 0) {
            ans[i] = 0;
            continue;
        }
        const need = Math.floor((success + spell - 1) / spell);
        const idx = lowerBound(potions, need);
        ans[i] = m - idx;
    }
    return ans;
};