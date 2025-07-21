class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        if(nums.size() == 0) return;
        int n = nums.size();
        k = k % n;
        if(k == 0)return;
        reverse(nums, n-k, n-1);
        reverse(nums, 0, n-k-1);
        reverse(nums, 0, n-1);        
    }

    void reverse(vector<int>&nums, int start, int end){
        while(start < end){
            swap(nums[start],nums[end]);
            start++; 
            end--;
        }
    }
};