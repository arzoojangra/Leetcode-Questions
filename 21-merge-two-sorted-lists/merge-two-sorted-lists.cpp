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
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* temp1 = list1;
        ListNode* temp2 = list2;
        ListNode* ansHead = new ListNode(-1);
        ListNode* pointer = ansHead;
        while(temp1 != nullptr && temp2 != nullptr){
            if(temp1 -> val <= temp2 -> val){
                pointer -> next = temp1;
                pointer = pointer -> next;
                temp1 = temp1 -> next;
            }else{
                pointer -> next = temp2;
                pointer = pointer -> next;
                temp2 = temp2 -> next;
            }
        }

        while(temp1 != nullptr){
            pointer -> next = temp1;
            pointer = pointer -> next;
            temp1 = temp1 -> next;
        }
        
        while(temp2 != nullptr){
            pointer -> next = temp2;
            pointer = pointer -> next;
            temp2 = temp2 -> next;
        }
        return ansHead -> next;
    }
};