/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (str) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let ch of str) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        }
        else {
            if (stack.length === 0 || stack[stack.length - 1] !== map[ch]) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
};