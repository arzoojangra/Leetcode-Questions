/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var reverseLL = function (head) {
    if (!head || !head.next)
        return head;

    let temp = head;
    let prev = null;
    while (temp) {
        front = temp.next;
        temp.next = prev;
        prev = temp;
        temp = front;
    }
    return prev;
};

var isPalindrome = function (head) {
    if (!head || !head.next)
        return true;

    let slow = head, fast = head;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let newHead = reverseLL(slow.next);
    let first = head, second = newHead;

    while (second) {
        if (first.val !== second.val) {
            reverseLL(newHead);
            return false;
        }

        first = first.next;
        second = second.next;
    }

    reverseLL(newHead);
    return true;
};