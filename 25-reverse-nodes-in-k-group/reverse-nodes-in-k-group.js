/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let temp = head;
    let len = 0;
    while(temp){
        len++;
        temp = temp.next;
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let group = dummy;

    while(len >= k){
        let curr = group.next;
        let next = curr.next;

        for(let i = 1; i <k; i++){
            if(next !== null)
                curr.next = next.next; 
            next.next = group.next;
            group.next = next;
            next = curr.next;
        }

        group = curr;
        len -= k;
        
    }
    return dummy.next;    
};