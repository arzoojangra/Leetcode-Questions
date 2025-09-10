/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let m1 = Array(256).fill(0), m2 = Array(256).fill(0);
    let n = s.length;

    for (let i = 0; i < n; i++) {
        if (m1[s.charCodeAt(i)] !== m2[t.charCodeAt(i)])
            return false;
        m1[s.charCodeAt(i)] = i + 1;
        m2[t.charCodeAt(i)] = i + 1;
    }
    return true;
};