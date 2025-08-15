/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let n = intervals.length;
    intervals.sort((a, b) => a[0] - b[0]);
    let ans = [];
    for (let i = 0; i < n; i++) {
        if (!ans.length || intervals[i][0] > ans[ans.length-1][1])
            ans.push(intervals[i]);
        else ans[ans.length-1][1] = Math.max(ans[ans.length-1][1], intervals[i][1]);
    }
    return ans;
};