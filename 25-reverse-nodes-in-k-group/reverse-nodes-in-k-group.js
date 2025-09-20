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

var reverseLinkedList = function (head) {
    let temp = head;
    let prev = null;
    while (temp) {
        let front = temp.next;
        temp.next = prev;
        prev = temp;
        temp = front;
    }
    return prev;
}

var getKthNode = function (temp, k) {
    k -= 1;
    while (temp && k > 0) {
        k--;
        temp = temp.next;
    }
    return temp;
}

var reverseKGroup = function (head, k) {
    let temp = head;
    let prevLast = null;
    while (temp) {
        let kThNode = getKthNode(temp, k);
        if (kThNode === null) {
            if (prevLast)
                prevLast.next = temp;
            break;
        }
        let nextNode = kThNode.next;
        kThNode.next = null;
        reverseLinkedList(temp);
        if (temp === head)
            head = kThNode;
        else
            prevLast.next = kThNode;
        prevLast = temp;
        temp = nextNode;
    }
    return head;
};