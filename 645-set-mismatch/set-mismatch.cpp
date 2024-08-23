class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        unordered_map<int, int> freq;
        int missing = 0, repeated = 0;
        int sum = 0, n = nums.size();
        int numsSum = (n * (n + 1)) / 2;
        for (int i = 0; i < nums.size(); i++) {
            freq[nums[i]]++;
            sum += nums[i];
            if (freq[nums[i]] > 1)
                repeated = nums[i];
        }

        missing = numsSum + repeated - sum;
        return {repeated, missing};
    }
};