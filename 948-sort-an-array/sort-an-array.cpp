class Solution {
public:
    vector<int> sortArray(vector<int>& nums) {
        int low = 0, high = nums.size() - 1;
        // mergeSort(nums, low, high);
        quickSort(nums, low, high);
        return nums;
    }

    // void mergeSort(vector<int>& arr, int low, int high) {
    //     if (low >= high)
    //         return;
    //     int mid = (low + high) / 2;
    //     mergeSort(arr, low, mid);
    //     mergeSort(arr, mid + 1, high);
    //     merge(arr, low, mid, high);
    // }

    // void merge(vector<int>& arr, int low, int mid, int high) {
    //     vector<int> temp;
    //     int left = low, right = mid + 1;
    //     while (left <= mid && right <= high) {
    //         if (arr[left] <= arr[right]) {
    //             temp.push_back(arr[left]);
    //             left++;
    //         }
    //         if (arr[left] > arr[right]) {
    //             temp.push_back(arr[right]);
    //             right++;
    //         }
    //     }
    //     while (left <= mid) {
    //         temp.push_back(arr[left]);
    //         left++;
    //     }
    //     while (right <= high) {
    //         temp.push_back(arr[right]);
    //         right++;
    //     }
    //     for (int i = low; i <= high; i++) {
    //         arr[i] = temp[i - low];
    //     }
    // }

    void quickSort(vector<int>& arr, int low, int high) {
        if (low < high) {
            int pIndex = partition(arr, low, high);
            quickSort(arr, low, pIndex - 1);
            quickSort(arr, pIndex + 1, high);
        }
    }

    int partition(vector<int>& arr, int low, int high) {
        int pivot = arr[low], i = low, j = high;
        while (i < j) {
            while (arr[i] <= pivot && i < high)
                i++;
            while (arr[j] > pivot && j > low)
                j--;
            if (i < j)
                swap(arr[i], arr[j]);
        }
        swap(arr[j], arr[low]);
        return j;
    }
};