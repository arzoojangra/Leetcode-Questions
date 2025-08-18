/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let hash = new Array(256).fill(0);
    let l = 0, r = 0, minLength = Infinity, sIndex = -1, count = 0;
    for (let i = 0; i < t.length; i++) {
        hash[t.charCodeAt(i)]++;
    }

    while (r < s.length) {
        if (hash[s.charCodeAt(r)] > 0) count++;
        hash[s.charCodeAt(r)]--;

        while (count === t.length) {
            if (r - l + 1 < minLength) {
                minLength = r - l + 1;
                sIndex = l;
            }
            hash[s.charCodeAt(l)]++;
            if (hash[s.charCodeAt(l)] > 0) count--;
            l++;
        }
        r++;
    }
    return sIndex === -1 ? "" : s.substring(sIndex, sIndex + minLength);
};