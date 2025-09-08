/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (str) {
    let ans = "";
    let cnt = 0;
    for (const s of str) {
        if (s === '(') {
            if (cnt !== 0)
                ans += s;
            cnt++;
        } else {
            if (cnt !== 1)
                ans += s;
            cnt--;
        }
    }
    return ans;
};