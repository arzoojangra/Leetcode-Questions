/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let temp1 = l1, temp2 = l2;
    let dummyNode = new ListNode(0);
    let current = dummyNode;
    let carry = 0;
    while (temp1 !== null || temp2 !== null) {
        let sum = carry;
        if (temp1) {
            sum += temp1.val;
            temp1 = temp1.next;
        }
        if (temp2) {
            sum += temp2.val;
            temp2 = temp2.next;
        }
        let newNode = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);
        current.next = newNode;
        current = current.next;
    }
    if (carry > 0) {
        let newNode = new ListNode(carry);
        current.next = newNode;
    }
    return dummyNode.next;
};