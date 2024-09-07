/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* kthNode(ListNode* head, int k) {
        ListNode* temp = head;
        int cnt = 1;
        while (temp != nullptr) {
            if (cnt == k)
                return temp;
            temp = temp -> next;
            cnt++;
        }
        return nullptr;
    }

    ListNode* reverseLL(ListNode* head) {
        ListNode* temp = head;
        ListNode* prev = nullptr;
        while (temp != nullptr) {
            ListNode* next = temp -> next;
            temp -> next = prev;
            prev = temp;
            temp = next;
        }
        return temp;
    }
    
    ListNode* reverseKGroup(ListNode* head, int k) {
        ListNode* temp = head;
        ListNode* nextNode = nullptr;
        ListNode* prevNode = nullptr;
        while(temp != nullptr){
            ListNode* kNode = kthNode(temp, k);
            if(kNode == nullptr){
                if(prevNode != nullptr)
                    prevNode -> next = temp;
                break;
            }
            nextNode = kNode -> next;
            kNode -> next = nullptr;
            reverseLL(temp);
            if(head == temp){
                head = kNode;
            }else{
                prevNode -> next = kNode;
            }
            prevNode = temp;
            temp = nextNode;
        }
        return head;
    }
};