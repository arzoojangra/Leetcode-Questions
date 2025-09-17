/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var findMiddle = function (head) {
    let slow = head, fast = head.next;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

var merge = function (list1, list2) {
    let dummyNode = new ListNode(-1);
    let temp = dummyNode;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            temp.next = list1;
            list1 = list1.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
    }

    if (list1) {
        temp.next = list1;
    }

    if (list2) {
        temp.next = list2;
    }

    return dummyNode.next;
};

var sortList = function (head) {
    if (!head || !head.next)
        return head;

    let middle = findMiddle(head);
    let leftHead = head, rightHead = middle.next;
    middle.next = null;

    leftHead = sortList(leftHead);
    rightHead = sortList(rightHead);

    return merge(leftHead, rightHead);
};