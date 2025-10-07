/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function (rains) {
    const n = rains.length;
    const ans = new Array(n).fill(1);
    const lastRain = new Map();
    const dryDays = [];

    function upperBound(arr, x) {
        let lo = 0, hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (arr[mid] <= x) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    }

    for (let i = 0; i < n; i++) {
        const lake = rains[i];
        if (lake === 0) {
            dryDays.push(i);
            ans[i] = 1;
        } else {
            ans[i] = -1;
            if (!lastRain.has(lake)) {
                lastRain.set(lake, i);
            } else {
                const prevDay = lastRain.get(lake);
                const idx = upperBound(dryDays, prevDay);
                if (idx === dryDays.length) {
                    return [];
                }
                const dryIndex = dryDays[idx];
                ans[dryIndex] = lake;
                dryDays.splice(idx, 1);
                lastRain.set(lake, i);
            }
        }
    }
    return ans;
};