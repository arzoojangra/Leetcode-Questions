/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let i = 0, j = height.length - 1;
    let best = 0;
    while (i < j) {
        const h = Math.min(height[i], height[j]);
        const width = j - i;
        best = Math.max(best, h * width);
        if (height[i] < height[j]) {
            i++;
        } else if (height[i] > height[j]) {
            j--;
        } else {
            i++;
            j--;
        }
    }
    return best;
};