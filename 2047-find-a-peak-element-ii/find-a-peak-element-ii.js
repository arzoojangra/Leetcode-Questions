/**
 * @param {number[][]} mat
 * @return {number[]}
 */

var maxEleIdx = function (mat, n, m, col) {
    let maxVal = -1, idx = -1;
    for (let i = 0; i < n; i++) {
        if (mat[i][col] > maxVal) {
            maxVal = mat[i][col];
            idx = i;
        }
    }
    return idx;
}

var findPeakGrid = function (mat) {
    let n = mat.length, m = mat[0].length;
    let low = 0, high = m - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let row = maxEleIdx(mat, n, m, mid);
        let left = (mid - 1) >= 0 ? mat[row][mid - 1] : -1;
        let right = (mid + 1) < m ? mat[row][mid + 1] : -1;
        if (mat[row][mid] > left && mat[row][mid] > right) {
            return [row, mid];
        } else if (mat[row][mid] < left) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return [-1, -1];
};