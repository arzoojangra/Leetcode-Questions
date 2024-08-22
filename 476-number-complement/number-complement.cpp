class Solution {
public:
    int findComplement(int num) {
        vector<int> binary;
        int number = num;
        while (number) {
            binary.push_back(number % 2);
            number = number / 2;
        }
        reverse(binary.begin(), binary.end());

        for (int i = 0; i < binary.size(); i++) {
            if (binary[i] == 0)
                binary[i] = 1;
            else
                binary[i] = 0;
        }

        int ans = 0;
        for (int i = binary.size() - 1; i >= 0; i--) {
            ans += (binary[i] * pow(2, (binary.size() - 1 - i)));
        }
        return ans;
    }
};