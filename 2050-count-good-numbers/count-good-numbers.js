/**
 * @param {number} n
 * @return {number}
 */

const MOD = 1000000007n;

function modPow(base, exp, mod) {
    let result = 1n;
    base = base % mod;
    while (exp > 0) {
        if (exp % 2n === 1n) result = (result * base) % mod;
        base = (base * base) % mod;
        exp = exp / 2n;
    }
    return result;
}

var countGoodNumbers = function (n) {
    n = BigInt(n);
    let even = (n + 1n) / 2n;
    let prime = (n / 2n);
    let res = (modPow(5n, even, MOD) * modPow(4n, prime, MOD)) % MOD;
    return Number(res);
};