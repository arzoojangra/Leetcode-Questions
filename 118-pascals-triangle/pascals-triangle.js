/**
 * @param {number} numRows
 * @return {number[][]}
 */

var row = function (row) {
    let numRow = [];
    let ans = 1;
    numRow.push(1);
    for (let i = 1; i < row; i++) {
        ans *= (row - i);
        ans /= i;
        numRow.push(ans);
    }
    return numRow;
}
var generate = function (numRows) {
    let ans = [];
    for (let i = 1; i <= numRows; i++) {
        ans.push(row(i));
    }
    return ans;
};