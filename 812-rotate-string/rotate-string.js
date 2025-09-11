/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    if (s.length !== goal.length)
        return false;
    let doubledS = s + s;
    return doubledS.includes(goal);
};