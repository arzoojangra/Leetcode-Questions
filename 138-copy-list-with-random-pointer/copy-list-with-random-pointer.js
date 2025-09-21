/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */

var copyRandomList = function (head) {
    if (!head) return null;

    let cur = head;
    while (cur) {
        const clone = new Node(cur.val);
        clone.next = cur.next;
        cur.next = clone;
        cur = clone.next;
    }

    cur = head;
    while (cur) {
        const clone = cur.next;
        clone.random = cur.random ? cur.random.next : null;
        cur = clone.next;
    }

    cur = head;
    const pseudoHead = new Node(0);
    let copyTail = pseudoHead;
    while (cur) {
        const clone = cur.next;
        const nextOrig = clone.next;

        copyTail.next = clone;
        copyTail = clone;

        cur.next = nextOrig;

        cur = nextOrig;
    }

    copyTail.next = null;
    return pseudoHead.next;
};