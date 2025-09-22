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
var rotateRight = function (head, k) {
    if (!head || !head.next || k === 0) return head;

    let len = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        len += 1;
    }

    tail.next = head;

    k = k % len;
    if (k === 0) {
        tail.next = null;
        return head;
    }

    let stepsToNewTail = len - k - 0;
    let newTail = head;
    for (let i = 1; i < len - k; i++) {
        newTail = newTail.next;
    }
    const newHead = newTail.next;

    newTail.next = null;

    return newHead;
};