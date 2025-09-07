/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let left = 0;
    let right = s.length - 1;

    let temp = "";
    let ans = "";

    while (left <= right) {
        let ch = s[left];
        if (ch !== ' ') {
            temp += ch;
        } else {
            if (temp !== "") {
                if (ans !== "") ans = temp + " " + ans;
                else ans = temp;
                temp = "";
            }
        }
        left++;
    }

    // Add last word if exists
    if (temp !== "") {
        if (ans !== "") ans = temp + " " + ans;
        else ans = temp;
    }

    return ans;
};