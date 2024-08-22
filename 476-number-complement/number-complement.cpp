class Solution {
public:
    int findComplement(int num) {
        int number = num, ans = 0, i = 0;
        while (number) {
            ans += ((number % 2 ? 0 : 1) * pow(2, i++));
            number = number / 2;
        }
        return ans;
    }
};