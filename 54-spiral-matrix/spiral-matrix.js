/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let left = 0, right = m - 1;
    let top = 0, bottom = n - 1;
    let ans = [];

    while (left <= right && top <= bottom) {

        // left to right
        for (let i = left; i <= right; i++) {
            ans.push(matrix[top][i]);
        }
        top++;

        // top to bottom
        for (let i = top; i <= bottom; i++) {
            ans.push(matrix[i][right]);
        }
        right--;

        if (top <= bottom) { //if no rows below
            // right to left
            for (let i = right; i >= left; i--) {
                ans.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) { //if no columns towards right
            // bottom to top
            for (let i = bottom; i >= top; i--) {
                ans.push(matrix[i][left]);
            }
            left++;
        }
    }
    return ans;
}
